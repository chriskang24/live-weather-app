import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FetchChild from './FetchChild';
import SearchBar from "../components/SearchBar";
import { Fragment } from 'react';

export default function Fetch() {

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [current, setCurrent] = useState("");
  const [forecast, setForecast] = useState([]);

  // let apiData = `http://api.weatherapi.com/v1/forecast.json?key=e339cb5f28c842bdb10191553212704&q=Toronto&days=1&aqi=no&alerts=no`
  // let apiData = `http://api.weatherapi.com/v1/forecast.json?key=e339cb5f28c842bdb10191553212704&q=${term}&days=1&aqi=no&alerts=no`

  useEffect(() => {
    let apiData = `http://api.weatherapi.com/v1/forecast.json?key=e339cb5f28c842bdb10191553212704&q=${term}&days=1&aqi=no&alerts=no`

    axios.get(apiData)
      .then(response => {
        const locationInfo = response.data.location
        const currentInfo = response.data.current
        const forecastInfo = response.data.forecast.forecastday[0].hour;

        console.log(response.data.location)
        setLocation(locationInfo)
        setCurrent(currentInfo)
        setForecast(forecastInfo)
      })
      .catch(error => console.error(`Error: ${error}`));
  }, [term])


  // const getLocation = () => {
  //   axios.get(apiData)
  //     .then((response) => {
  //       const locationInfo = response.data.location
  //       const currentInfo = response.data.current
  //       const forecastInfo = response.data.forecast.forecastday[0].hour;
  //       // add data to state
  //       setLocation(locationInfo)
  //       setCurrent(currentInfo)
  //       setForecast(forecastInfo)
  //     })
  //     .catch(error => console.error(`Error: ${error}`));
  // }

  // useEffect(() => {
  //   getLocation()
  // }, []);



  return (
    <Fragment>
      <SearchBar onSearch={term => setTerm(term)} />
      <FetchChild
        location={location}
        current={current}
        forecast={forecast}
      />
    </Fragment>
  )
}

