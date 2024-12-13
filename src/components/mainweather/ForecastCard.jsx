import PropTypes from "prop-types";

export default function ForecastCard({ weather }) {
  const baseUrl = "https://openweathermap.org/img/wn/imgname@2x.png";
  const imgUrl = baseUrl.replace("imgname", weather.icon);

  return (
    <div id="days">
      <h3>{weather.date}</h3>
      <img src={imgUrl} alt="Weather Status Icon" draggable="false" />
      <h2>{weather.temp}°</h2>
      <h4>{weather.description}</h4>
    </div>
  );
}

ForecastCard.propTypes = {
  weather: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
