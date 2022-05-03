import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const App = () => {
  const [currentData, setCurrentData] = useState({})
  const [allData, setAllData] = useState({})
  const [location, setLocation] = useState('Brussels')

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = () => {
      axios.get(API_URL).then(response => {
        setCurrentData(response.data)
        console.log(response.data);
        const API_URL_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&exclude=minutely&appid=${API_KEY}`
        axios.get(API_URL_2).then(data => {
          setAllData(data.data)
          console.log(data.data);
        })
        setLocation('')
        // localStorage.setItem("previousLocation", JSON.stringify(location))
      })
  }

  useEffect(() => {
    searchLocation();
  }, [])

  return (
    <>
      <div className={`overflow-hidden w-full ${currentData.weather ? 'min-h-fit' : 'min-h-screen'} bg-sunrise-img bg-fixed bg-[length:600px] sm:bg-cover bg-no-repeat text-white flex flex-col`}>
        <NavBar />
        <Routes>
          <Route path="/" element={ <CurrentWeather currentData={currentData} location={location} setLocation={setLocation} searchLocation={searchLocation}/> } />
          <Route path="/hourly" element={ <HourlyWeather allData={allData} currentData={currentData} location={location} setLocation={setLocation} searchLocation={searchLocation} /> } />      
          <Route path="/daily" element={ <DailyWeather allData={allData} currentData={currentData} location={location} setLocation={setLocation} searchLocation={searchLocation} /> } />      
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
