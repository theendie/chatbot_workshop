const { answer } = require('./entities');
const { processNaturalLanguage } = require('./wit');

exports.answer = async message => {
  const proccessedMessage = await processNaturalLanguage(message);
  return answer(proccessedMessage);
};
