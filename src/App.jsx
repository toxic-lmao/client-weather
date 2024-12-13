import { useState, Suspense, lazy } from "react";
import useWeather from "./libs/useWeather";
import SkeletonScreen from "./components/SkeletonScreen";
import Title from "./components/Title";

const MainWeather = lazy(() => import("./components/mainweather/MainWeather"));
const ChanceOfRain = lazy(() => import("./components/ChanceOfRain"));
const Map = lazy(() => import("./components/Map"));

const initialLocation = [51.505, -0.09];

export default function App() {
  const [location, setLocation] = useState(initialLocation);
  const { weatherData, error } = useWeather(location);

  return (
    <>
      {error ? (
        <Title name={error} />
      ) : (
        <div className="grid grid-cols-[2fr_1fr] gap-10 rounded-xl">
          <Suspense fallback={<SkeletonScreen height="16rem" />}>
            {weatherData && (
              <MainWeather
                weatherData={weatherData}
                setLocation={setLocation}
              />
            )}
          </Suspense>

          <Suspense fallback={<SkeletonScreen height="16rem" />}>
            {weatherData && (
              <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
            )}
          </Suspense>

          <Suspense fallback={<SkeletonScreen height="30rem" />}>
            {weatherData && (
              <Map location={location} setLocation={setLocation} />
            )}
          </Suspense>
        </div>
      )}
    </>
  );
}
