import "./App.css";
import { useState } from "react";
import Chart from "./components/Chart/Chart";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [currIJ, setCurrIJ] = useState({ i: -1, j: -1 });
  const [completed, setCompleted] = useState([]);
  const [size, setSize] = useState(10);
  const [speed, setSpeed] = useState(1);

  // console.log(completed);
  console.log(completed);

  useEffect(() => {
    const arr = generateArray(size);
    setCompleted([]);
    setData([...arr]);
  }, [size]);

  const generateArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      const num = Math.round(Math.random() * 100) + 1;
      // console.log(num);
      arr.push(num);
    }
    return [...arr];
  };

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
      },
      (500 * c) / speed,
      [...arr],
      i,
      j,
      c,
      speed
    );
  };

  const bubbleSort = () => {
    const array = [...data];
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        alterStateAfterTimeOut(
          array,
          j,
          j + 1,
          count,
          j === 0,
          array.length - i
        );
        count++;
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          // console.log(arr);
        }
      }
    }
    alterStateAfterTimeOut(array, 0, 1, count, true, 1);
    alterStateAfterTimeOut(array, 0, 1, count, true, 0);
    alterStateAfterTimeOut(array, -1, -1, count);
  };

  const selectionSort = () => {
    const array = [...data];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      let index = i;
      for (let j = i + 1; j < array.length; j++) {
        alterStateAfterTimeOut(array, i, j, count, j === i + 1, i - 1);
        count++;
        if (array[index] > array[j]) {
          index = j;
          // console.log(arr);
        }
      }
      let temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
    alterStateAfterTimeOut(
      array,
      array.length - 1,
      array.length - 2,
      count,
      true,
      array.length - 2
    );
    alterStateAfterTimeOut(
      array,
      array.length - 1,
      array.length - 2,
      count,
      true,
      array.length - 1
    );
  };

  const sortClickHandler = () => {
    setCompleted([]);
    setIsSorting(true);
    // bubbleSort();
    selectionSort();
    setIsSorting(false);
  };

  const randomizeClickHandler = () => {
    const arr = generateArray(size);
    setData([...arr]);
  };

  const sizeChangeHandler = (e) => {
    setSize(+e.target.value);
    // console.log(e.target.value);
  };

  const speedChangeHandler = (e) => {
    setSpeed(+e.target.value);
  };

  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <Chart data={data} currIJ={currIJ} completed={completed} />
      <button onClick={sortClickHandler}>Sort</button>
      <button onClick={randomizeClickHandler}>Randomize</button>
      <select value={`${size}`} onChange={sizeChangeHandler}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </select>
      <select value={`${speed}`} onChange={speedChangeHandler}>
        <option value="0.25">0.25x</option>
        <option value="0.5">0.5x</option>
        <option value="1">1x</option>
        <option value="2">2x</option>
        <option value="4">4x</option>
      </select>
    </div>
  );
}

export default App;
