import { useState } from "react";
import useWeather from "./libs/useWeather";
import MainWeather from "./components/mainweather/MainWeather";
import ChanceOfRain from "./components/ChanceOfRain";
import Map from "./components/Map";
import SkeletonScreen from "./components/SkeletonScreen";

const initialLocation = [51.505, -0.09];

export default function App() {
  const [location, setLocation] = useState(initialLocation);
  const { weatherData, loading, error } = useWeather(location);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="container">
          {loading ? (
            <SkeletonScreen height={240} />
          ) : weatherData ? (
            <MainWeather weatherData={weatherData} setLocation={setLocation} />
          ) : null}

          {loading ? (
            <SkeletonScreen height={240} />
          ) : weatherData ? (
            <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
          ) : null}

          {!weatherData ? (
            <SkeletonScreen height={500} />
          ) : (
            <Map location={location} setLocation={setLocation} />
          )}
        </div>
      )}
    </>
  );
}
