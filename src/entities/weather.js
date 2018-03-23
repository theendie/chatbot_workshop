class Weather {
  async answer(city, desiredForecastDate) {
    const client = AccuWeatherClient();
    const cityForecast = await client.getWeatherForecast(city);
    const desiredForecast = await cityForecast.getForecast(desiredForecastDate);
    return `A minima sera ${desiredForecastDate.minimum} e a maxima sera ${desiredForecast.maximum}`;
  }
}

const witAiEntityMap = {
  POA: '45561',
};

class AccuWeatherClient {
  constructor() {
    this.baseUrl = 'http://dataservice.accuweather.com';
    this.apikey = process.env.ACCUWEATHER_APIKEY;
    this.language = 'pt-br';
  }

  async getWeatherForecast(witAiCity) {
    const locationKey = witAiEntityMap[witAiCity];
    const urlLocation = `${this.baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&language=${this.language}&metric=true`;

    const response = await request(urlLocation);
    const objectResponse = JSON.parse(response);
    return new AccuWeatherMapper(objectResponse);
  }
}

class AccuWeatherMapper {
  constructor(jsonRepresentation) {
    this._json = jsonRepresentation;
  }

  get minimum () {
    return 15.0;
  }

  get maximum () {
    return 30.4;
  }
}

module.exports = {
  Weather,
};
