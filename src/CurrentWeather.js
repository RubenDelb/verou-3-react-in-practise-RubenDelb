import React from 'react'

const CurrentWeather = ({ currentData }) => {
	if(currentData.name) {
		return (
      <div className="flex flex-col justify-between">
        <div className="top">
					<div className="location">
						<p className="text-2xl font-bold"> { currentData.name } </p>
					</div>
					<div className="temp">
						<h1 className="text-8xl"> { Math.round(currentData.main.temp) } °C </h1>
					</div>
					<div className="description italic">
						<p className="text-2xl font-bold inline"> { currentData.weather[0].main } </p>
					</div>
        </div>
        <div className="bottom">
					<div className="feels">
						<p className="text-2xl font-bold">Feels like: {Math.round(currentData.main.feels_like)} °C</p>
					</div>
					<div className="humidity">
						<p className="text-2xl font-bold">Humidity: {Math.round(currentData.main.humidity)} %</p>
					</div>
					<div className="wind">
						<p className="text-2xl font-bold">Windspeed: {Math.round(currentData.wind.speed * 3.6)} km/h</p>
					</div>
				</div>
			</div>
		)} else { return <> </> }
}

export default CurrentWeather