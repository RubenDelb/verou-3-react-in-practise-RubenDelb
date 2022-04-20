import axios from "axios";
import React, { useState } from "react";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const App = () => {
  const [currentData, setCurrentData] = useState({})
  const [allData, setAllData] = useState({})
  const [location, setLocation] = useState('')

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(API_URL).then(response => {
        setCurrentData(response.data)
        console.log(response.data);
        const API_URL_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`
        axios.get(API_URL_2).then(data => {
          setAllData(data.data)
          console.log(data.data);
        })
        setLocation('')
      })
    }
  }

  return (
    <div className="w-full h-screen bg-sunrise-img bg-center text-center bg-cover bg-no-repeat text-white">
      <div className="search">
        <input className="text-neutral-900" 
          type="text" 
          value={location} 
          onChange={event => setLocation(event.target.value)} 
          onKeyUp={searchLocation} 
          placeholder="Enter location"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {currentData.name ? <p className="text-2xl font-bold">{currentData.name}</p> : null}
            
          </div>
          <div className="temp">
            {currentData.main ? <h1 className="text-8xl">{Math.round(currentData.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            {currentData.weather ? <p className="text-2xl font-bold">{currentData.weather[0].main}</p> : null }
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {currentData.main ? <p className="text-2xl font-bold">Feels like: {Math.round(currentData.main.feels_like)} °C</p> : null}
          </div>
          <div className="humidity">
            {currentData.main ? <p className="text-2xl font-bold">Humidity: {Math.round(currentData.main.humidity)} %</p> : null}
          </div>
          <div className="wind">
            {currentData.wind ? <p className="text-2xl font-bold">Windspeed: {Math.round(currentData.wind.speed * 3.6)} km/h</p> : null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
