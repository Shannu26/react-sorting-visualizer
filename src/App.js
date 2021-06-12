import "./App.css";
import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Select from "./components/Select/Select";
import Button from "./components/Button/Button";
import { useEffect } from "react";

import generateArray from "./helpers/generateArray";
import bubbleSort from "./helpers/bubbleSort";
import selectionSort from "./helpers/selectionSort";

function App() {
  const [data, setData] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [currIJ, setCurrIJ] = useState({ i: -1, j: -1 });
  const [completed, setCompleted] = useState([]);
  const [size, setSize] = useState(10);
  const [speed, setSpeed] = useState(1);
  const [algType, setAlgType] = useState(0);

  useEffect(() => {
    const arr = generateArray(size);
    setCompleted([]);
    setData([...arr]);
  }, [size, speed, algType]);

  const alterStateAfterTimeOut = (arr, i, j, c, cond, index) => {
    setTimeout(
      (arr, i, j, c) => {
        setData(arr);
        setCurrIJ({ i, j });
        // if (c === arr.length) setIsSorting(false);
        if (cond) {
          setCompleted((prev) => {
            const next = [...prev];
            next.push(index);
            return [...next];
          });
        }
        if (i === -1 && j === -1) {
          setIsSorting(false);
        }
      },
      (500 * c) / speed,
      [...arr],
      i,
      j,
      c,
      speed
    );
  };

  const sortClickHandler = () => {
    setCompleted([]);
    setIsSorting(true);
    algorithms[algType](alterStateAfterTimeOut, data);
  };

  const randomizeClickHandler = () => {
    setCompleted([]);
    const arr = generateArray(size);
    setData([...arr]);
  };

  const sizeChangeHandler = (e) => {
    setSize(+e.target.value);
  };

  const speedChangeHandler = (e) => {
    setSpeed(+e.target.value);
  };

  const algChangeHandler = (e) => {
    setAlgType(+e.target.value);
  };

  const algorithms = {
    0: bubbleSort,
    1: selectionSort,
  };

  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <Chart data={data} currIJ={currIJ} completed={completed} />
      <Button
        btnName="Sort"
        onClickHandler={sortClickHandler}
        isDisabled={isSorting}
      />
      <Button
        btnName="Randomize"
        onClickHandler={randomizeClickHandler}
        isDisabled={isSorting}
      />
      <Select
        value={algType}
        onChangeHandler={algChangeHandler}
        values={[0, 1]}
        options={["Bubble Sort", "Selection Sort"]}
        isDisabled={isSorting}
      />
      <Select
        value={size}
        onChangeHandler={sizeChangeHandler}
        values={[5, 10, 25, 50, 75, 100]}
        options={[5, 10, 25, 50, 75, 100]}
        isDisabled={isSorting}
      />
      <Select
        value={speed}
        onChangeHandler={speedChangeHandler}
        values={[0.25, 0.5, 1, 2, 4]}
        options={["0.25x", "0.5x", "1x", "2x", "4x"]}
        isDisabled={isSorting}
      />
    </div>
  );
}

export default App;
