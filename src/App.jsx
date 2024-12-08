import { useEffect, useState } from "react";
import getLocation from "./managers/getLocation";
import getWeather from "./managers/getWeather";
import ForecastSection from "./components/ForecastSection";
import ChanceOfRain from "./components/ChanceOfRain";

function App() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { lat, lon } = await getLocation();
        const weather = await getWeather(lat, lon);
        setWeatherData(weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading weather...</p>
      ) : weatherData ? (
        <div className="container">
          <ForecastSection weatherData={weatherData} />
          <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
        </div>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}
    </>
  );
}

export default App;
