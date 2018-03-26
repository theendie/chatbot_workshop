class City{
  constructor(city) {
    this.name = city ? city[0].value.toUpperCase() : 'POA';
  }
}

module.exports = {
  City,
};
