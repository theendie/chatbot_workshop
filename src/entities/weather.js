const request = require('request-promise');
const moment = require('moment');

class Weather {
  constructor(responseCity, responseDate) {
    this.city = this.extractCity(responseCity);
    this.date = this.extractDate(responseDate);
  }

  extractCity(city) {
    return city ? city[0].value.toUpperCase() : 'POA';
  }

  extractDate(date) {
    return date ? moment(date[0].value.split('T')[0]) : moment();
  }

  async answer() {
    const client = new AccuWeatherClient();
    const cityForecast = await client.getWeatherForecast(this.city);
    const desiredForecast = cityForecast.getForecast(this.date);
    if (desiredForecast) {
      let response = `A minima sera ${
        desiredForecast.minimum
      } e a maxima sera ${desiredForecast.maximum}. `;
      response += `\nDe dia a previsão é de ${
        desiredForecast.description.day
      }. `;
      response += `De noite é ${desiredForecast.description.night}`;
      return response;
    }
    return 'Não consigo prever para esta data :(';
  }
}

const witAiEntityMap = {
  POA: '45561',
};

class AccuWeatherClient {
  constructor() {
    this.baseUrl = 'http://dataservice.accuweather.com';
    this.language = 'pt-br';
  }

  async getWeatherForecast(witAiCity) {
    const locationKey = witAiEntityMap[witAiCity];
    const apiKey = process.env.ACCUWEATHER_APIKEY;
    const urlLocation = `${
      this.baseUrl
    }/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=${
      this.language
    }&metric=true`;
    const response = await request(urlLocation);
    const objectResponse = JSON.parse(response);
    return new AccuWeatherMapper(objectResponse);
  }
}

class AccuWeatherMapper {
  constructor(jsonRepresentation) {
    this._json = jsonRepresentation;
    this._forecasts = {};
    jsonRepresentation.DailyForecasts.forEach(day => {
      const actualDay = {};
      actualDay.date = moment(day.Date.split('T')[0]);
      actualDay.minimum =
        day.Temperature.Minimum.Value + day.Temperature.Minimum.Unit;
      actualDay.maximum =
        day.Temperature.Maximum.Value + day.Temperature.Maximum.Unit;
      actualDay.description = {};
      actualDay.description.day = day.Day.IconPhrase;
      actualDay.description.night = day.Night.IconPhrase;
      this._forecasts[actualDay.date] = actualDay;
    });
  }

  getForecast(date) {
    return this._forecasts[date];
  }
}

module.exports = {
  Weather,
};
