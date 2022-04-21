import { MdWaterDrop } from 'react-icons/md'
import { WiHumidity, WiRaindrop } from 'react-icons/wi'

const HourlyWeather = (allData) => {
    // console.log(allData);
    if (allData.allData.hourly) {
        return (
            allData.allData.hourly.slice(0, 12).map(oneHour => {
                let unixTime = (oneHour.dt + allData.allData.timezone_offset - 3600);
                let forecastHour = new Date(unixTime * 1000).getHours()
                return (
                    <div className='bg-white/50 mt-2 text-stone-900'>
                        <div className='grid grid-cols-3'>
                            
                            <div className='flex justify-start'>
                                <p className='self-center font-semibold ml-2 text-sm sm:text-lg'>
                                {forecastHour}h
                                </p>
                                <div className='sm:flex ml-[15%]'>
                                    <img className=' w-16 sm:w-20 md:w-full' src={`http://openweathermap.org/img/wn/${oneHour.weather[0].icon}@2x.png`} alt="" />
                                    <h2 className='text-xl sm:text-xl md:text-3xl self-center ml-2 sm:ml-6'>
                                        {Math.round(oneHour.temp)}°C
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <div className='mt-4 ml-4 grid grid-rows-2'>
                                    <div className='flex'>
                                        <WiRaindrop size={32}/>
                                        <p>{oneHour.rain ? oneHour.rain['1h'] : '0'} mm </p>
                                    </div>
                                    <div className='flex'>
                                        <WiHumidity size={24}/>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                )
            })
        )} else { return <> </> }
}

export default HourlyWeather