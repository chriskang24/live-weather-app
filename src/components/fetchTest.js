const axios = require('axios');

let apiData = 'http://api.weatherapi.com/v1/forecast.json?key=e339cb5f28c842bdb10191553212704&q=Mississauga&days=1&aqi=no&alerts=no'

async function getHourlyForecast() {
  const hourlyForecast = [];
  try {
    const response = await axios.get(apiData);
    // console.log(response.data.forecast.forecastday[0].date)
    // console.log(response.data.forecast.forecastday[0].day)
    // console.log(response.data.forecast.forecastday[0].astro)
    // console.log(response.data.forecast.forecastday[0].hour)
    if (response.status === 200) {
      let hourlyData = response.data.forecast.forecastday[0].hour;
      for (let key in hourlyData) {
        // console.log(hourlyData[key])
        let hourlyInfo = hourlyData[key]
        hourlyForecast.push(hourlyInfo)
      }
    }
    console.log(hourlyForecast)
    return hourlyForecast;
  } catch (error) {
    console.error(error);
  }
}

const data = getHourlyForecast()
console.log(data);