const { Weather } = require('./weather');
const random = require('../utils/random');
const { Greeting } = require('./greeting');
const { Farewell } = require('./farewell');

const INVALID_ENTITY = 'Entidade nao encontrada'

const invalidQuestion = [
  'Nao entendi sua pergunta',
  'Poderia perguntar outra coisa?',
  'Hmm, nao entendi. Poderia perguntar novamente?',
];

const getEntity = entities => {
  if (entities.hasOwnProperty('greeting')) {
    return new Greeting();
  }

  if (entities.hasOwnProperty('farewells')) {
    return new Farewell();
  }

  if (entities.hasOwnProperty('weather')) {
    const city = 'POA'; //DEVEMOS PEGAR ISTO DO WITAI
    const date = new Date(); //DEVEMOS PEGAR ISTO DO WITAI
    return new Weather(city, date);
  }

  throw new Error(INVALID_ENTITY);
};

const answer = async parsedMessage => {
  try {
    const entity = getEntity(parsedMessage.entities);
    return await entity.answer();
  } catch (err) {
    console.log('Aconteceu algum error: ', err)
    return random(invalidQuestion);
  }
};

module.exports = {
  answer
};
