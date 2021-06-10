import "./App.css";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    labels: [10, 20, 30, 40, 10],
    datasets: [
      {
        data: [10, 20, 30, 40, 10],
        backgroundColor: ["rgb(248,248,248)"],
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
  };

  // const alg = () => {
  //   const state = data.datasets[0].data;
  //   for (let i = 0; i < 5; i++) {
  //     for (let j = 0; j < 5; j++) {
  //       // console.log(state);
  //       if (state[i] > state[j]) {
  //         let temp = 0;
  //         temp = state[i];
  //         state[i] = state[j];
  //         state[j] = temp;
  //         // console.log(state);
  //         setTimeout(
  //           (s, i, j) => {
  //             if (state[i] > state[j]) {
  //               let temp = 0;
  //               temp = state[i];
  //               state[i] = state[j];
  //               state[j] = temp;
  //             }
  //             setData((prev) => {
  //               const newState = { ...prev };
  //               console.log(newState);
  //               console.log(s);
  //               newState.datasets[0].data = s;
  //               return newState;
  //             });
  //           },
  //           5000,
  //           state,
  //           i,
  //           j
  //         );
  //       }
  //     }
  //   }
  //   setSorting(false);
  // };
  // if (sorting) alg();

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
