import "./App.css";
import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import Description from "./components/Description/Description";
import ColorMeanings from "./components/ColorMeanings/ColorMeanings";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

import generateArray from "./helpers/generateArray";
import bubbleSort from "./helpers/bubbleSort";
import selectionSort from "./helpers/selectionSort";
import insertionSort from "./helpers/insertionSort";

function App() {
  const [data, setData] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [currIJ, setCurrIJ] = useState({ i: -1, j: -1 });
  const [color, setColor] = useState("red");
  const [completed, setCompleted] = useState([]);
  const [size, setSize] = useState(10);
  const [speed, setSpeed] = useState(3);
  const [algType, setAlgType] = useState(0);

  useEffect(() => {
    const arr = generateArray(size);
    setCompleted([]);
    setData([...arr]);
  }, [size, speed, algType]);

  const alterStateAfterTimeOut = (arr, i, j, c, cond, index, color) => {
    setTimeout(
      (arr, i, j, c) => {
        setData(arr);
        setCurrIJ({ i, j });
        setColor(color ? color : "red");
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
      200 * c * speed,
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
    2: insertionSort,
  };

  return (
    <div className="App">
      <Navbar
        isSorting={isSorting}
        randomizeClickHandler={randomizeClickHandler}
        algType={algType}
        algChangeHandler={algChangeHandler}
        sizeChangeHandler={sizeChangeHandler}
        size={size}
        speed={speed}
        speedChangeHandler={speedChangeHandler}
      />
      <div className="wrapper">
        <Chart
          data={data}
          currIJ={currIJ}
          completed={completed}
          color={color}
        />
        <Button
          btnName="Sort"
          onClickHandler={sortClickHandler}
          isDisabled={isSorting}
          className="sort"
        />
        <ColorMeanings />
        <Description algType={algType} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
