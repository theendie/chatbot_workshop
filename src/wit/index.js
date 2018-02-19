const { Wit, log } = require('node-wit');

module.exports = new Wit({
  accessToken: process.env.WIT_SERVER_TOKEN,
});
