import { useState } from "react";
import useWeather from "./hooks/useWeather";
import ForecastSection from "./components/ForecastSection";
import ChanceOfRain from "./components/ChanceOfRain";
import Map from "./components/Map";
import SkeletonScreen from "./components/SkeletonScreen";

function App() {
  const [location, setLocation] = useState([51.505, -0.09]);
  const { weatherData, loading } = useWeather(location);

  return (
    <div className="container">
      {/* Forecast Section */}
      <div className="forecast-section">
        {loading ? (
          <SkeletonScreen uiHeight={240} />
        ) : weatherData ? (
          <ForecastSection
            weatherData={weatherData}
            setLocation={setLocation}
          />
        ) : (
          <p>Unable to load forecast data.</p>
        )}
      </div>

      {/* Chance of Rain Section */}
      <div className="chance-of-rain-section">
        {loading ? (
          <SkeletonScreen uiHeight={240} />
        ) : weatherData ? (
          <ChanceOfRain chanceOfRain={weatherData.forecastWeather.list} />
        ) : (
          <p>Unable to load rain data.</p>
        )}
      </div>

      {/* Map Section */}
      <div className="map-section">
        {loading ? (
          <SkeletonScreen uiHeight={400} />
        ) : (
          <Map location={location} setLocation={setLocation} />
        )}
      </div>
    </div>
  );
}

export default App;
