import { useEffect, useState } from "react";
import getLocation from "./managers/getLocation";
import getWeather from "./managers/getWeather";
import ForecastSection from "./components/ForecastSection";
import ChanceOfRain from "./components/ChanceOfRain";
import Map from "./components/Map";

function App() {
  const [loading, setLoading] = useState(true);
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
    <>
      {loading ? (
        <p>Loading weather...</p>
      ) : weatherData ? (
        <div className="container">
          <ForecastSection weatherData={weatherData} />
          <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
          <Map location={location} setLocation={setLocation} />
        </div>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}
    </>
  );
}

export default App;
