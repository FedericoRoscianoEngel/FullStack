import React, { useEffect, useState } from 'react'
import CountriesService from '../services/CountriesServices'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        CountriesService.getWeather(country.capital).then(weatherData => {
            setWeather(weatherData)
            console.log('weatherData', weatherData)
        })
    }, [country.capital])

    return <li>
        <h3>Weather in {country.capital}</h3>

        {weather && (
            <ul>
                <li>Temperature: {weather.main.temp} °C</li>
                <li>Humidity: {weather.main.humidity} %</li>
                <li>Wind Speed: {weather.wind.speed} m/s</li>
            </ul>
        )}

    </li >
}

export default Weather
