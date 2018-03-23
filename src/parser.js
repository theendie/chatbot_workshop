const { answer } = require('./entities');
const { parse } = require('./wit');

exports.answer = async message => {
  const parsedMessage = await parse(message);
  return answer(parsedMessage);
};
