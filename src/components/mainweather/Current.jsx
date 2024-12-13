import PropTypes from "prop-types";

export default function Current({ current }) {
  if (!current || !current.weather) {
    return <div>No current weather data available</div>;
  }

  const baseUrl = "https://openweathermap.org/img/wn/imgname@2x.png";
  const imgUrl = baseUrl.replace("imgname", current.weather[0].icon);
  return (
    <div id="current">
      <div id="current-day-time">
        <h3>{current.dt}</h3>
      </div>
      <div className="current-weather">
        <div className="curr-temp-icon">
          {current.main.temp}°
          <img src={imgUrl} alt="Cloudy Sun Icon" draggable="false" />
        </div>
        <div className="apparent-weather">
          {current.name ? <h3>{current.name}</h3> : <h3>Unknown</h3>}
          <h4>{current.weather[0].description}</h4>
          <h4>Feels like: {current.main.feels_like}°</h4>
        </div>
      </div>
    </div>
  );
}

Current.propTypes = {
  current: PropTypes.object.isRequired,
};
