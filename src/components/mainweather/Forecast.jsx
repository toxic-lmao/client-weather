import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const ForecastCard = ({ weather }) => {
  const baseUrl = "https://openweathermap.org/img/wn/imgname@2x.png";
  const imgUrl = baseUrl.replace("imgname", weather.icon);

  return (
    <div className="flex flex-col justify-evenly items-center bg-[#1f1f1e] rounded-2xl text-base text-center p-4 px-4 sm:p-2">
      <h3 className="font-medium text-#0e1016 pb-2 border-b-2 border-[#404141] text-nowrap sm:text-lg">
        {weather.date}
      </h3>
      <img src={imgUrl} alt="Weather Status Icon" draggable="false" />
      <h2 className="text-xl font-medium sm:text-2xl">{weather.temp}°</h2>
      <h4 className="text-sm sm:text-base">{weather.description}</h4>
    </div>
  );
};

export const Forecast = ({ forecast }) => {
  const [cardsToShow, setCardsToShow] = useState(
    window.innerWidth >= 640 ? 6 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth >= 640 ? 6 : 4);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {forecast.list.slice(0, cardsToShow).map((entry, index) => (
        <ForecastCard
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
};

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
};

ForecastCard.propTypes = {
  weather: PropTypes.object.isRequired,
};
