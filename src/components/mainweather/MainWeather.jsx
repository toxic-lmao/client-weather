import LocationBtn from "./LocationBtn";
import Current from "./Current";
import Forecast from "./Forecast";
import PropTypes from "prop-types";

export default function MainWeather({ weatherData, setLocation }) {
  const { currentWeather, forecastWeather } = weatherData;

  return (
    <div className="main-weather">
      <div className="forecast-title">
        <h1>Forecast</h1>
        <LocationBtn setLocation={setLocation} />
      </div>
      <div className="forecast">
        <Current current={currentWeather} />
        <Forecast forecast={forecastWeather} />
      </div>
    </div>
  );
}

MainWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
  setLocation: PropTypes.func.isRequired,
};
