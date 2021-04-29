import React from 'react';

export default function FetchChild(props) {
  // console.log(props.location)
  // console.log('current', props.current)
  // console.log(props.forecast);
  // console.log('forecast', typeof props.forecast, props.forecast[0].time_epoch)
  const location = props.location
  const current = props.current
  // const forecast = props.forecast
  // const { forecast } = props;

  const parsedForecast = props.forecast.map(hour => {
    return (
      <div className="container" key={hour.time_epoch}>
        <div className="col-xs-12">
          <h1>Time: {hour.time}</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Temp: {hour.temp_c} C</h5>
              <h5 className="card-title">Chance of rain: {hour.chance_of_rain} %</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
  )

  return (
    <div className="container" key={location.tz_id}>
      <div className="col-xs-12">
        <h1>City: {location.name}, Province: {location.region}</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Local Time: {location.localtime}</h5>
            <h5 className="card-title">Current Temp: {current.temp_c} C</h5>
            <h5 className="card-title">Feels Like: {current.feelslike_c} C</h5>
            <h5 className="card-title">Wind: {current.wind_mph} mph</h5>
            <h5 className="card-title">Humidity: {current.humidity} %</h5>
          </div>
        </div>
      </div>
      <div>
        {parsedForecast}
      </div>
    </div>
  )
}