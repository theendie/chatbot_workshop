const { Weather } = require('./weather');
const { Greeting } = require('./greeting');
const { NotFound } = require('./notFound');
const { Farewell } = require('./farewell');
const { City } = require('./city');
const { CustomDate } = require('./date');

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
    const city = new City(entities.city); //DEVEMOS PEGAR ISTO DO Weather
    const customDate = new CustomDate(entities.datetime); //DEVEMOS PEGAR ISTO DO WITAI
    return new Weather(city, customDate.extract());
  }

  return new NotFound();
};

module.exports = {
  answer,
};
