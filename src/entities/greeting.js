const { answerGreeting } = require('../answers');

class Greeting {
  answer() {
    return answerGreeting();
  }
}

module.exports = {
  Greeting,
};
