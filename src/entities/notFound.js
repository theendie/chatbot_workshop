const random = require('../utils/random');

const invalidQuestion = [
  'Nao entendi sua pergunta',
  'Poderia perguntar outra coisa?',
  'Hmm, nao entendi. Poderia perguntar novamente?',
];

class NotFound {
  answer() {
    return random(invalidQuestion);
  }
}

module.exports = {
  NotFound,
};
