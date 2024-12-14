export default function ForecastCard({ weather }) {
  const baseUrl = "https://openweathermap.org/img/wn/imgname@2x.png";
  const imgUrl = baseUrl.replace("imgname", weather.icon);

  return (
    <div className="flex flex-col justify-evenly items-center bg-[#1f1f1e] rounded-2xl text-center p-2 px-2">
      <h3 className="text-lg font-medium text-#0e1016 pb-2 border-b-2 border-[#404141]">
        {weather.date}
      </h3>
      <img src={imgUrl} alt="Weather Status Icon" draggable="false" />
      <h2 className="text-2xl font-medium">{weather.temp}°</h2>
      <h4 className="text-base">{weather.description}</h4>
    </div>
  );
}
