export const Current = ({ current }) => {
  if (!current || !current.weather) {
    return <div>No current weather data available</div>;
  }

  const baseUrl = "https://openweathermap.org/img/wn/imgname@2x.png";
  const imgUrl = baseUrl.replace("imgname", current.weather[0].icon);
  return (
    <div>
      <div className="flex items-stretch bg-[#93bedf] rounded-t-2xl p-3 px-4 text-[#0e1016]">
        <h3 className="text-xl font-medium text-#0e1016">{current.dt}</h3>
      </div>
      <div className="flex flex-col bg-[#9dccf3] rounded-b-2xl p-3 px-4 text-[#0e1016]">
        <div className="flex text-4xl font-semibold justify-between pt-1">
          {current.main.temp}°
          <img src={imgUrl} alt="Cloudy Sun Icon" draggable="false" />
        </div>
        <div className="text-base font-medium text-[#48484a]">
          {current.name ? (
            <h3 className="text-xl font-semibold">{current.name}</h3>
          ) : (
            <h3>Unknown</h3>
          )}
          <h4>{current.weather[0].description}</h4>
          <h4>Feels like: {current.main.feels_like}°</h4>
        </div>
      </div>
    </div>
  );
};
