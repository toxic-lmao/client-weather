import { useState, useEffect, useCallback } from "react";
import getWeather from "./getWeather";

export default function useWeather(location) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    try {
      const [lat, lon] = location;
      const weather = await getWeather(lat, lon);
      setWeatherData(weather);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  }, [location]);

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(() => {
      fetchWeather();
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, [fetchWeather]);

  return { weatherData, error };
}
