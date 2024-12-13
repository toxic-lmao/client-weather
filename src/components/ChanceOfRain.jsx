import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import PropTypes from "prop-types";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function ChanceOfRain(props) {
  const chartData = {
    labels: props.chanceOfRain.slice(0, 6).map((item) => item.dt),
    datasets: [
      {
        data: props.chanceOfRain.slice(0, 6).map((item) => item.pop),
        backgroundColor: "#9dccf3",
        borderRadius: 5,
        barPercentage: 0.2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#333",
        titleColor: "#fff",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
            family: "DM Sans",
          },
          padding: 8,
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
            family: "DM Sans",
          },
          padding: 16,
          stepSize: 0.1,
          min: 0,
          max: 1,
          callback: function (value) {
            if (value === 0.0) return "0%";
            if (value === 0.1) return "10%";
            if (value === 0.2) return "20%";
            if (value === 0.3) return "30%";
            if (value === 0.4) return "40%";
            if (value === 0.5) return "50%";
            if (value === 0.6) return "60%";
            if (value === 0.7) return "70%";
            if (value === 0.8) return "80%";
            if (value === 0.9) return "90%";
            if (value === 1.0) return "100%";
            return "";
          },
        },
      },
    },
  };

  return (
    <div className="chance-of-rain-section">
      <h1>Chance of rain</h1>
      <div className="chance-of-rain">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

ChanceOfRain.propTypes = {
  chanceOfRain: PropTypes.array.isRequired,
};
