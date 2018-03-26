const random = require('../utils/random');

const invalidQuestion = [
  'Nao posso prever nada para esta data :(',
  'Esta data esta certa?',
  'Mim desculpe. Não consigo prever esta data.',
];

class InvalidDate {
  answer() {
    return random(invalidQuestion);
  }
}

module.exports = {
  InvalidDate,
};
