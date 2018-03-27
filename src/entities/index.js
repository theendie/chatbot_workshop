const { Weather } = require('./weather');
const { Greeting } = require('./greeting');
const { NotFound } = require('./notFound');
const { Farewell } = require('./farewell');

const answer = async parsedMessage => {
  try {
    const entity = await getEntity(parsedMessage.entities);
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

  if (entities.hasOwnProperty('farewell')) {
    return new Farewell();
  }

  if (entities.hasOwnProperty('weather')) {
    return new Weather(entities.city, entities.datetime);
  }

  return new NotFound();
};

module.exports = {
  answer,
};
