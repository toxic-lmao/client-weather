import { useState, useEffect } from "react";
import getWeather from "../managers/getWeather";

function useWeather(location) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
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

  return { weatherData, loading };
}

export default useWeather;
