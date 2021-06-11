import { Bar } from "react-chartjs-2";
import "./Chart.css";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        borderWidth: 0,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      grid: {
        display: false,
        borderWidth: 0,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  events: [],
  animation: false,
};

const Chart = (props) => {
  const data = {
    labels: props.data,
    datasets: [
      {
        data: props.data,
      },
    ],
  };
  const backgroundColor = props.data.map((el, i) => {
    return i === props.currIJ.i || i === props.currIJ.j
      ? "red"
      : "rgb(248,248,248)";
  });

  for (let i of props.completed) {
    backgroundColor[i] = "green";
  }
  data.datasets[0].backgroundColor = [...backgroundColor];
  return (
    <div className="chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
