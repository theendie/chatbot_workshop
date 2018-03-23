const { answerFarewell } = require('../answers');

class Farewell {
  answer() {
    return answerFarewell();
  }
}

module.exports = {
  Farewell,
};
