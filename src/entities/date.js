const moment = require('moment');

class CustomDate {
  constructor(newDate) {
    this.date = newDate ? moment(newDate[0].value.split('T')[0]) : moment();
  }
  extract() {
    return this.date;
  }
}

module.exports = {
  CustomDate,
};
