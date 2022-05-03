import { WiHumidity, WiRaindrop } from "react-icons/wi";
import windDirectionConvertor from "./functions/windDirectionConvertor";

const DailyWeather = ({ allData, currentData, location, setLocation, searchLocation }) => {
  if (allData.hourly) {
    return (
      <div className={`bg-fixed bg-[length:600px] sm:bg-cover bg-no-repeat ${currentData.weather[0].main === 'Clouds' ? 'bg-clouds-img' : currentData.weather[0].main === 'Clear' ? 'bg-clear-img' : currentData.weather[0].main === 'Rain' ? 'bg-rain-img' : currentData.weather[0].main == 'Thunderstorm' ? 'bg-overcast-img' : currentData.weather[0].main == 'Snow' ? 'bg-snow-img' : ''}`}>
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
        </div>
        <h2 className='text-4xl text-center text-stone-700 font-semibold'>{currentData.name}, {currentData.sys.country}</h2>
        {allData.daily.map(oneDay => {
          let unixTime = (oneDay.dt + allData.timezone_offset - 3600);
          let forecastDay = new Date(unixTime * 1000).getDate();
          let forecastMonth = new Date(unixTime * 1000).getMonth() + 1;
          return (
            <div className='pb-6 sm:hover:scale-[1.02] transition duration-700'>
              <p className='mx-12 mt-6 text-2xl w-fit bg-zinc-100/25 text-stone-900 font-semibold px-2 rounded-t'>{forecastDay}/{forecastMonth}</p>

              <div className='bg-zinc-100/50 text-stone-900 mx-6 rounded'>
                <div className='grid grid-cols-3'>

                  <div className='flex justify-start'>
                    {/* <p className='self-center font-semibold ml-2 text-sm sm:text-lg'>
                                            {forecastDay}h
                                            </p> */}
                    <div className='sm:flex ml-[15%]'>
                      <img className=' w-16 sm:w-20 md:w-full' src={`http://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`} alt="" />
                      <div className="flex sm:grid self-center  ml-2 sm:ml-6 md:">
                        <h2 className='text-xl sm:text-xl md:text-3xl text-center'>
                          {Math.round(oneDay.temp.max)}°C
                        </h2>
                        <h4 className='text-sm sm:text-md md:text-lg text-center'>
                          &nbsp; /{Math.round(oneDay.temp.min)}°C
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center sm:justify-between'>
                    <div className='my-2 ml-4 grid grid-rows-2'>
                      <div className='flex'>
                        <WiRaindrop size={32} />
                        <p className='text-xs sm:text-base lg:text-xl italic'>{oneDay.rain ? oneDay.rain : '0'} mm </p>
                      </div>
                      <div className='mt-2 hidden sm:flex'>
                        <WiHumidity size={24} className="ml-1" />
                        <p className='ml-1 text-xs sm:text-base lg:text-xl italic'>{oneDay.humidity} %</p>
                      </div>
                      <div className='self-center text-center sm:hidden'>
                        <div>
                          {windDirectionConvertor(oneDay.wind_deg)}
                        </div>
                        <p className='text-xs sm:text-sm'>{Math.round(oneDay.wind_speed * 3.6)} km/h</p>
                      </div>
                    </div>
                    <div className='self-center text-center hidden sm:grid'>
                      <div className='lg:text-2xl'>
                        {windDirectionConvertor(oneDay.wind_deg)}
                      </div>
                      <p className='text-xs sm:text-sm lg:text-xl italic'>{Math.round(oneDay.wind_speed * 3.6)} km/h</p>
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='place-self-center'>
                      <p className='text-sm sm:text-xl'>Feels like: </p>
                      <p className='text-sm sm:text-xl font-semibold'> {Math.round(oneDay.feels_like.day)} °C</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <> <div className="my-4 text-center">
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
    </div></>
  }
}

export default DailyWeather