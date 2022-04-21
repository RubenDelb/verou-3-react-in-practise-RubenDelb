import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const App = () => {
  const [currentData, setCurrentData] = useState({})
  const [allData, setAllData] = useState({})
  const [location, setLocation] = useState('')

    useEffect(() => {
    const storedLocation = JSON.parse(localStorage.getItem("previousLocation"))
    if (storedLocation) setLocation(storedLocation)
  }, [])

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(API_URL).then(response => {
        setCurrentData(response.data)
        console.log(response.data);
        const API_URL_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&exclude=minutely&appid=${API_KEY}`
        axios.get(API_URL_2).then(data => {
          setAllData(data.data)
          console.log(data.data);
        })
        setLocation('')
        localStorage.setItem("previousLocation", JSON.stringify(location))
      })
    }
  }

  return (
    <div className="w-full h-screen bg-sunrise-img bg-center bg-cover bg-no-repeat text-white">
      <NavBar />
      <div className="my-4 text-center">
        <input className="text-neutral-200 rounded-full bg-stone-900/50 py-2 px-3 focus:outline-none focus:ring focus:ring-stone-400" 
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
