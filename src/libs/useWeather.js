import { useState, useEffect } from "react";
import getWeather from "./getWeather";

export default function useWeather(location) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const [lat, lon] = location;
        const weather = await getWeather(lat, lon);
        setWeatherData(weather);
      } catch (error) {
        setError(error.message);
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

  return { weatherData, loading, error };
}
