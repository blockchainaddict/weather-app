import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

const getWeather = async (lat, long) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                latitude: lat,
                longitude: long,
                current_weather: true,
                hourly: ['windspeed_10m', 'rain', 'snowfall'],
                timezone: 'auto'
            }
        });
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default getWeather;
