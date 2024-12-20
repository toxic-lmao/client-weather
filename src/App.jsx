import { useState, Suspense, lazy } from "react";
import { useWeather } from "./libs/useWeather";
import { SkeletonScreen } from "./components/SkeletonScreen";
import { Title } from "./components/Title";

const MainWeather = lazy(() => import("./components/mainweather/MainWeather"));
const ChanceOfRain = lazy(() => import("./components/ChanceOfRain"));
const Map = lazy(() => import("./components/Map"));

let initialLocation;
if (localStorage.getItem("location")) {
  const { lat, lng } = JSON.parse(localStorage.getItem("location"));
  initialLocation = [lat, lng];
} else {
  initialLocation = [51.505, -0.09];
}

export default function App() {
  const [location, setLocation] = useState(initialLocation);
  const { weatherData, error } = useWeather(location);

  return (
    <>
      {error ? (
        <Title name={error} />
      ) : (
        <div className="flex flex-col gap-10 rounded-xl xl:grid xl:grid-cols-[2fr_1fr]">
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
