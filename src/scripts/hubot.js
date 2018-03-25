// Description:
//   Esse script escuta qualquer mensagem e a envia para um analisador
//   de linguagem natural que extrai a intencao para frase e gera uma
//   resposta para o usuario
//
// Dependencies:
//
// Configuration:
//  WIT_ACCESS_TOKEN
//  ACCUWEATHER_APIKEY
//
// Authors:
//   asserdna
//   eduardomoroni

const { answer } = require('../parser');
const ANYTHING = /.*/i;

async function answerMessage(res) {
  const userMessage = res.match.input;
  const response = await answer(userMessage);
  res.send(response);
}

module.exports = robot => {
  robot.hear(ANYTHING, answerMessage);
};
