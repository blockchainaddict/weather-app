import { useState, useEffect } from "react";
import getWeather from "../../services/weatherService";
import useLocation from "../../services/useLocation";
import Modal from "../Modal/Modal";

import { format } from "date-fns";

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStyle, setCardStyle] = useState({
    tempBoxShadow: null,
    windBoxShadow: null,
    rainBoxShadow: null,
  });
  // const [ rain, setRain ] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { location, error } = useLocation();

  const currentTime = new Date();
  const localISOTime = format(currentTime, "yyyy-MM-dd'T'HH:00");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to close the modal from within the child
  const closeModal = () => {
    setIsModalOpen(false);
  };

  function getTempShadowColor(temp) {
    if (temp < 5) {
      return "white";
    } else if (temp < 10) {
      return "blue";
    } else if (temp < 15) {
      return "violet";
    } else if (temp < 20) {
      return "green";
    } else {
      return "orange";
    }
  }

  function getWindShadowColor(windSpeed) {

    if (windSpeed < 5) {
      return "green"; // Low wind speeds
    } else if (windSpeed < 10) {
      return "yellow"; // Moderate wind speeds
    } else if (windSpeed < 15) {
      return "orange"; // High wind speeds
    } else {
      return "violet"; // Very high wind speeds
    }
  }

  function getRainShadowColor(rain) {
    console.log('RAIN:', rain);

    if (rain == 0) {
      return "cornflowerBlue";
    } else if (rain < 0.3) {
      return "lightblue";
    } else {
      return "violet"; // Very high wind speeds
    }
  }

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(location?.latitude, location?.longitude);
        setWeatherData(data);

        const index = data.hourly?.time?.indexOf(localISOTime);
        setCurrentIndex(index);
        // setRain(data.hourly.rain);

        // Get the appropriate box-shadow color based on wind speed
        const tempBoxShadowColor = getTempShadowColor(
          weatherData?.current_weather?.temperature
        );
        const windBoxShadowColor = getWindShadowColor(
          data?.hourly?.windspeed_10m[index]
        );
        const rainBoxShadowColor = getRainShadowColor(
          data?.hourly?.rain[index]
        );

        // Dynamic style for the weather card
        setCardStyle((p) => {
          return {
            ...p,
            tempBoxShadow: `0px 0px 10px ${tempBoxShadowColor}`,
            windBoxShadow: `0px 0px 10px ${windBoxShadowColor}`,
            rainBoxShadow: `0px 0px 10px ${rainBoxShadowColor}`,
          };
        });

        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, [localISOTime, location, weatherData?.current_weather?.temperature]);

  return (
    <div>
      <div>
        {error && <p>Error: {error.message}</p>}
        {weatherData ? (
          <div className="weather-container" onClick={toggleModal}>
            <div
              className="weather-card"
              style={{ boxShadow: cardStyle.tempBoxShadow }}
            >
              <p className="weather-info-text">
                {weatherData?.current_weather?.temperature} °C
              </p>
              <sub>Temperature</sub>
            </div>

            <div
              className="weather-card"
              style={{ boxShadow: cardStyle.windBoxShadow }}
              onClick={toggleModal}
            >
              <p className="weather-info-text">
                {weatherData?.hourly?.windspeed_10m[currentIndex]} km/h
              </p>
              <sub>Winds</sub>
            </div>

            <div
              className="weather-card"
              style={{ boxShadow: cardStyle.rainBoxShadow }}
              onClick={toggleModal}
            >
              <p className="weather-info-text">
                {weatherData?.hourly?.rain[currentIndex]
                  ? "It might rain"
                  : "Clear skies"}
              </p>
              <p className="weather-info-text">
                {weatherData?.hourly?.snowfall[currentIndex]
                  ? "It might snow"
                  : null}
              </p>
              <sub>Skies</sub>
            </div>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>

      {isModalOpen && <Modal title={"Temperature"} onClose={closeModal} />}

      <div className="weather-background"></div>
    </div>
  );
}

export default Weather;
