const random = require('../utils/random');

const greetings = [
  'Ola!',
  'Como vai?',
  'Tudo bem?',
  'Olá, em que posso ajudar?',
];

class Greeting {
  answer() {
    return random(greetings);
  }
}

module.exports = {
  Greeting,
};
