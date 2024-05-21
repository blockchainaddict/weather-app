import { useState, useEffect } from "react";
import getWeather from "../../services/weatherService";
import useLocation from "../../services/useLocation";

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ rain, setRain ] = useState([]);

  const { location, error } = useLocation();

  const currentTime = new Date().toISOString().slice(0, 13) + ":00"; // '2024-05-21T00:00'
  console.log('CURRENT TIME', currentTime);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(location.latitude, location.longitude);
        setWeatherData(data);
        
        const index = data.hourly.time.findIndex((t) => t === currentTime);
        setCurrentIndex(index); 
        setRain(data.hourly.rain);

        // console.log("data", data);
        // console.log('TIME OBJ = = = = ', data.hourly.time);

      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div>
      <div>
        {error && <p>Error: {error.message}</p>}
        {weatherData ? (
          <div className="weather-container">
            <div className="weather-card">
              <p className="is-size-3">
                {weatherData?.current_weather?.temperature} °C
              </p>
              <sub>Temperature</sub>
            </div>

            <div className="weather-card">
              <p className="is-size-3">
                {weatherData?.hourly?.windspeed_10m[0]} m/s
              </p>
              <sub>Winds</sub>
            </div>

            <div className="weather-card">
              <p className="is-size-3">
                {weatherData?.hourly?.rain[0] ? "It will rain" : "Clear skies"}
              </p>
              <p className="is-size-3">
                {weatherData?.hourly?.snowfall[0] ? "It will snow" : null}
              </p>
              <sub>Skies</sub>
            </div>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>

      <div className="weather-background"></div>
    </div>
  );
}

export default Weather;
