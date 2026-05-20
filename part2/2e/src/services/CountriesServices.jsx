import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const apiKey = import.meta.env.VITE_WEATHER_API_KEY
const getAll = () => {
    const request = axios.get(baseUrl + 'all')
    return request.then(response => response.data)
}

const getWeather = (capital) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&lang=es&units=metric`)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    getWeather: getWeather
}