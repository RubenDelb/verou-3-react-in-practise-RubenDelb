import axios from "axios";
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";

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
    <div className="w-full h-screen bg-sunrise-img bg-center bg-cover bg-no-repeat text-white">
      <div className="search">
        <input className="text-neutral-200 rounded-full bg-stone-900/50 py-1 px-2 focus:outline-none focus:ring focus:ring-stone-400" 
          type="text" 
          value={location} 
          onChange={event => setLocation(event.target.value)} 
          onKeyUp={searchLocation} 
          placeholder="Enter location"/>
      </div>
      <CurrentWeather currentData={currentData}/>
    </div>
  );
}

export default App;
