const { Weather } = require('./weather');
const { Greeting } = require('./greeting');
const { NotFound } = require('./notFound');
const { Farewell } = require('./farewell');

const answer = async parsedMessage => {
  try {
    const entity = getEntity(parsedMessage.entities);
    return await entity.answer();
  } catch (err) {
    console.log('Aconteceu algum error: ', err);
    return 'Deu ruim.';
  }
};

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

  return new NotFound();
};

module.exports = {
  answer,
};
