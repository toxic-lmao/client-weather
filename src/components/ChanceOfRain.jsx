import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Title } from "./Title";
import { memo } from "react";
import PropTypes from "prop-types";

function ChanceOfRain({ chanceOfRain }) {
  const chartData = chanceOfRain.slice(0, 6).map((item) => ({
    name: item.dt,
    y: item.pop * 100,
  }));

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: "273",
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    legend: { enabled: false },
    accessibility: {
      enabled: false,
    },
    xAxis: {
      categories: chanceOfRain.slice(0, 6).map((item) => item.dt),
      labels: {
        style: {
          color: "#fff",
          fontFamily: "DM Sans",
          fontSize: "14px",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: { enabled: false },
      labels: {
        style: {
          color: "#fff",
          fontFamily: "DM Sans",
          fontSize: "14px",
        },
        formatter: function () {
          if (this.value === 0) return "Clear";
          if (this.value === 25) return "Cloudy";
          if (this.value === 50) return "Overcast";
          if (this.value === 75) return "Showers";
          if (this.value === 100) return "Stormy";
          return `${this.value}%`;
        },
      },
      gridLineDashStyle: "LongDash",
    },
    tooltip: {
      backgroundColor: "#333",
      style: {
        fontFamily: "DM Sans",
        fontSize: "16px",
        color: "#fff",
      },
      pointFormat: "{point.y}%",
    },
    plotOptions: {
      column: {
        pointWidth: 20,
        borderWidth: 0,
        borderRadius: 16,
        dataLabels: {
          enabled: true,
          format: "{point.y}%",
          style: {
            color: "#fff",
            fontFamily: "DM Sans",
            fontSize: "14px",
            opacity: 0.8,
          },
        },
      },
    },
    series: [
      {
        name: "Chance of Rain",
        data: chartData,
        color: "#9dccf3",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-between gap-4">
      <Title name="Chance of Rain" />
      <div className="ml-[-10px] mr-[-10px] mb-[-16px]">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
}

ChanceOfRain.propTypes = {
  chanceOfRain: PropTypes.array.isRequired,
};

export default memo(ChanceOfRain);
