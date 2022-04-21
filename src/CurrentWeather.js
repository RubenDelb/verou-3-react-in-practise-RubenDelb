import React from 'react'

const CurrentWeather = ({ currentData }) => {
	if(currentData.name) {
		return (
			<div>
				<div className="top m-2 grid grid-rows-auto place-items-center gap-4">
					<div className="location mt-4">
						<p className="text-3xl sm:text-4xl font-semibold"> { currentData.name } </p>
					</div>
					<div className="temp">
						<h1 className="text-8xl sm:text-9xl"> { Math.round(currentData.main.temp) } °C </h1>
					</div>
					<div className="description italic">
						<p className="text-2xl sm:text-3xl font-semibold"> { currentData.weather[0].main } </p>
					</div>
				</div>
				<div className="bottom pb-4 absolute bottom-0 left-0 grid grid-cols-3 justify-items-center w-screen">
					<div className="feels grid grid-rows-2">
						<p className="text-md sm:text-2xl font-semibold">Feels like</p>
						<p className="text-xl sm:text-4xl font-semibold">{Math.round(currentData.main.feels_like)} °C</p>
					</div>
					<div className="humidity grid grid-rows-2">
						<p className="text-md sm:text-2xl font-semibold">Humidity</p>
						<p className="text-xl sm:text-4xl font-semibold">{Math.round(currentData.main.humidity)} %</p>
					</div>
					<div className="wind grid grid-rows-2">
						<p className="text-md sm:text-2xl font-semibold">Windspeed</p>
						<p className="text-xl sm:text-4xl font-semibold">{Math.round(currentData.wind.speed * 3.6)} km/h</p>
					</div>
				</div>
			</div>
		)} else { return <> </> }
}

export default CurrentWeather