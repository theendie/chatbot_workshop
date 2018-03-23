const { errorMessages } = require('./errors');
const { farewells } = require('./farewells');
const { greetings } = require('./greetings');
const { invalidQuestion } = require('./invalids');

const { floor, random } = Math;
const randomAnswer = messages => messages[floor(random() * messages.length)];

module.exports = {
  answerError: () => randomAnswer(errorMessages),
  answerFarewell: () => randomAnswer(farewells),
  answerGreeting: () => randomAnswer(greetings),
  answerInvalidQuestion: () => randomAnswer(invalidQuestion),
};
