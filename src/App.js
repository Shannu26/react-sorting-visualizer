import "./App.css";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    labels: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
    datasets: [
      {
        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
        backgroundColor: [
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
          "rgb(248,248,248)",
        ],
      },
    ],
  });
  const [sorting, setSorting] = useState(true);

  var options = {
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
          // color: "white",
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

  const sort = () => {
    const arr = data.datasets[0].data;
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        setTimeout(
          (arr, i, j) => {
            setData((prev) => {
              const new_data = { ...prev };
              new_data.datasets[0].data = [...arr];
              new_data.labels = [...arr];
              new_data.datasets[0].backgroundColor = [
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
                "rgb(248,248,248)",
              ];
              new_data.datasets[0].backgroundColor[i] = "red";
              new_data.datasets[0].backgroundColor[j] = "red";
              // console.log(arr);
              console.log(`${i}  ${j}`);
              return new_data;
            });
          },
          100 * c,
          [...arr],
          i,
          j,
          c
        );
        c++;
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          // console.log(arr);
        }
      }
    }
    setSorting(false);
  };

  if (sorting) sort();

  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <div className="bar">
        {/* {console.log(data)} */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
