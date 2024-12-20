import PropTypes from "prop-types";

export const Current = ({ current }) => {
  if (!current || !current.weather) {
    return <div>No current weather data available</div>;
  }

  const baseUrl = "https://openweathermap.org/img/wn/imgname@2x.png";
  const imgUrl = baseUrl.replace("imgname", current.weather[0].icon);
  return (
    <div className="col-span-2 xl:col-span-1">
      <div className="flex items-stretch bg-[#93bedf] rounded-t-2xl p-3 pt-4 px-4 text-[#0e1016] md:pt-4 md:px-5 md:p-3">
        <h3 className="text-lg font-medium text-#0e1016 md:text-xl text-nowrap">
          {current.dt}
        </h3>
      </div>
      <div className="flex flex-col bg-[#9dccf3] rounded-b-2xl p-3 px-4 text-[#0e1016] md:p-4 md:px-5">
        <div className="flex text-3xl font-semibold justify-between pt-1 md:text-4xl">
          {current.main.temp}°
          <img
            className="w-2/5 md:w-auto"
            src={imgUrl}
            alt="Cloudy Sun Icon"
            draggable="false"
          />
        </div>
        <div className="text-base font-medium text-[#48484a]">
          {current.name ? (
            <h3 className="text-lg font-semibold md:text-xl">{current.name}</h3>
          ) : (
            <h3 className="text-lg font-semibold md:text-xl">Unknown</h3>
          )}
          <h4>{current.weather[0].description}</h4>
          <h4>Feels like: {current.main.feels_like}°</h4>
        </div>
      </div>
    </div>
  );
};

Current.propTypes = {
  current: PropTypes.object.isRequired,
};
