import ForecastDay from "./ForecastCard";

export default function Forecast({ forecast }) {
  return (
    <>
      {forecast.list.slice(0, 6).map((entry, index) => (
        <ForecastDay
          key={index}
          weather={{
            date: entry.dt,
            icon: entry.weather[0].icon,
            temp: entry.main.temp,
            description: entry.weather[0].description,
          }}
        />
      ))}
    </>
  );
}
