import React from 'react'

const CurrentWeather = ({ currentData, location, setLocation, searchLocation }) => {
	if(currentData.name) {
		return (
			<div id='current' className={`bg-scroll flex flex-col h-[95vh] bg-cover bg-no-repeat ${currentData.weather[0].main === 'Clouds' ? 'bg-clouds-img' : currentData.weather[0].main === 'Clear' ? 'bg-clear-img' : currentData.weather[0].main === 'Rain' ? 'bg-rain-img' : currentData.weather[0].main == 'Thunderstorm' ? 'bg-overcast-img' : currentData.weather[0].main == 'Snow' ? 'bg-snow-img' : ''}`}>
				<div className="my-4 text-center">
					<input className="text-neutral-200 rounded-full bg-stone-900/50 py-2 px-3 focus:outline-none focus:ring focus:ring-stone-400" 
						type="text" 
						value={location} 
						onChange={event => setLocation(event.target.value)} 
						onKeyUp={(event) => {
							if (event.key === 'Enter') {
								searchLocation()
							}
					}} 
						placeholder="Enter location"/>
				</div>
				<div className='grid content-between h-full'>
					<div className="top m-2 grid grid-rows-auto place-items-center gap-4">
						<div className="location mt-4">
							<p className="text-3xl text-center sm:text-4xl font-semibold"> { currentData.name }, {currentData.sys.country} </p>
						</div>
						<div className="temp">
							<h1 className="text-8xl sm:text-9xl px-8 py-1 rounded-xl bg-stone-500/25"> { Math.round(currentData.main.temp) } °C </h1>
						</div>
						<div className="description italic">
							<p className="text-2xl sm:text-3xl font-semibold"> { currentData.weather[0].main } </p>
						</div>
					</div>
					<div className="grid grid-cols-3 justify-items-center w-screen mt-auto mb-6 sm:px-2">
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
			</div>
		)
	} else {
		return <>
					<div className="my-4 text-center">
						<input className="text-neutral-200 rounded-full bg-stone-900/50 py-2 px-3 focus:outline-none focus:ring focus:ring-stone-400"
							type="text"
							value={location}
							onChange={event => setLocation(event.target.value)}
							onKeyUp={(event) => {
								if (event.key === 'Enter') {
									searchLocation()
								}
							}}
							placeholder="Enter location" />
					</div> </> }
}

export default CurrentWeather