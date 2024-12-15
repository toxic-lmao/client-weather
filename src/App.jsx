import { useState } from "react";
import useWeather from "./libs/useWeather";
import MainWeather from "./components/mainweather/MainWeather";
import ChanceOfRain from "./components/ChanceOfRain";
import Map from "./components/Map";
import SkeletonScreen from "./components/SkeletonScreen";
import Title from "./components/Title";

const initialLocation = [51.505, -0.09];

export default function App() {
  const [location, setLocation] = useState(initialLocation);
  const { weatherData, loading, error } = useWeather(location);

  return (
    <>
      {error ? (
        <Title name={error} />
      ) : (
        <div className="grid grid-cols-[2fr_1fr] gap-10 rounded-xl">
          {loading ? (
            <SkeletonScreen height="16rem" />
          ) : weatherData ? (
            <MainWeather weatherData={weatherData} setLocation={setLocation} />
          ) : null}

          {!weatherData ? (
            <SkeletonScreen height="16rem" />
          ) : (
            <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
          )}

          {!weatherData ? (
            <SkeletonScreen height="30rem" />
          ) : (
            <Map location={location} setLocation={setLocation} />
          )}
        </div>
      )}
    </>
  );
}
