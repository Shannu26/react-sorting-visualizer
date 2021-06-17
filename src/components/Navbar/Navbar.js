import "./Navbar.css";
import Button from "../Button/Button";
import Select from "../Select/Select";

import { useLayoutEffect, useState } from "react";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(true);

  useLayoutEffect(() => {
    const updateState = () => {
      if (window.innerWidth >= 1000) setShowNav(true);
      else setShowNav(false);
    };
    window.addEventListener("resize", updateState);
    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, [showNav]);
  return (
    <div className="navbar">
      <h1>Sort Visualizer</h1>
      {!showNav && (
        <div id="hamburger" onClick={props.toggleShowSidebar}>
          <i className={`fa ${props.showSidebar ? "fa-times" : "fa-bars"}`}></i>
        </div>
      )}
      {showNav && (
        <div className="nav">
          <Button
            btnName="Randomize"
            onClickHandler={props.randomizeClickHandler}
            isDisabled={props.isSorting}
          />
          <Select
            value={props.algType}
            onChangeHandler={props.algChangeHandler}
            values={[0, 1, 2]}
            index={[0, 1, 2].findIndex((el) => el === props.algType)}
            options={["Bubble Sort", "Selection Sort", "Insertion Sort"]}
            isDisabled={props.isSorting}
          />
          <Select
            value={props.size}
            onChangeHandler={props.sizeChangeHandler}
            values={[5, 10, 25, 50, 75, 100]}
            options={[5, 10, 25, 50, 75, 100]}
            index={[5, 10, 25, 50, 75, 100].findIndex(
              (el) => el === props.size
            )}
            isDisabled={props.isSorting}
            title="Size"
          />
          <Select
            value={props.speed}
            onChangeHandler={props.speedChangeHandler}
            values={[5, 4, 3, 2, 1]}
            index={[5, 4, 3, 2, 1].findIndex((el) => el === props.speed)}
            options={["0.25x", "0.5x", "1x", "2x", "4x"]}
            isDisabled={props.isSorting}
            title="Speed"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
