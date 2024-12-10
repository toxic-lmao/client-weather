import { useEffect, useState } from "react";
import getWeather from "./managers/getWeather";
import ForecastSection from "./components/ForecastSection";
import ChanceOfRain from "./components/ChanceOfRain";
import Map from "./components/Map";

function App() {
  const [loading, setLoading] = useState(true); // Global loading state
  const [location, setLocation] = useState([51.505, -0.09]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const [lat, lon] = location;
        const weather = await getWeather(lat, lon);
        setWeatherData(weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    const interval = setInterval(() => {
      fetchWeather();
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, [location]);

  return (
    <div className="container">
      {/* Forecast Section */}
      {loading ? (
        <div className="forecast-section-loading">
          <p>Loading Forecast...</p>
        </div>
      ) : weatherData ? (
        <ForecastSection weatherData={weatherData} setLocation={setLocation} />
      ) : (
        <p>Unable to load forecast data.</p>
      )}

      {loading ? (
        <div className="chance-of-rain-loading">
          <p>Loading Rain Chance...</p>
        </div>
      ) : weatherData ? (
        <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
      ) : (
        <p>Unable to load rain data.</p>
      )}

      {loading ? (
        <div className="map-loading">
          <p>Loading Map...</p>
        </div>
      ) : (
        <Map location={location} setLocation={setLocation} />
      )}
    </div>
  );
}

export default App;
