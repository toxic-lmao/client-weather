import LocationBtn from "./LocationBtn";
import Current from "./Current";
import Forecast from "./Forecast";
import Title from "../Title";
import { memo } from "react";

export default memo(function MainWeather({ weatherData, setLocation }) {
  const { currentWeather, forecastWeather } = weatherData;

  return (
    <div className="flex flex-col justify-between gap-4">
      <Title name="Forecast">
        <LocationBtn setLocation={setLocation} />
      </Title>
      <div className="grid grid-cols-[2fr_repeat(6,_1fr)] grid-rows-1 gap-3 justify-items-stretch">
        <Current current={currentWeather} />
        <Forecast forecast={forecastWeather} />
      </div>
    </div>
  );
});
