const { Wit } = require('node-wit');
const WitClient = new Wit({ accessToken: process.env.WIT_ACCESS_TOKEN });

module.exports = {
  parse: async message => WitClient.message(message, {}),
};
