import LocationBtn from "./weather/LocationBtn";
import CurrentWeather from "./weather/CurrentWeather";
import ForecastWeather from "./weather/ForecastWeather";
import PropTypes from "prop-types";

function MainWeather(props) {
  const { currentWeather, forecastWeather } = props.weatherData;

  return (
    <div className="forecast-section">
      <div className="forecast-title">
        <h1>Forecast</h1>
        <LocationBtn setLocation={props.setLocation} />
      </div>
      <div className="forecast">
        <CurrentWeather current={currentWeather} />
        <ForecastWeather forecast={forecastWeather} />
      </div>
    </div>
  );
}

MainWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default MainWeather;
