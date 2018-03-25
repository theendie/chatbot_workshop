const random = require('../utils/random');

const farewells = [
  'Tchau!',
  'Ate mais',
  'Tchauzinho',
  'Tenha um excelente dia!',
  'Até a próxima',
];

class Farewell {
  answer() {
    return random(farewells);
  }
}

module.exports = {
  Farewell,
};
