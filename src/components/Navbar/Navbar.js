import "./Navbar.css";
import Button from "../Button/Button";
import Select from "../Select/Select";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>Sort Visualizer</h1>
      <div>
        <Button
          btnName="Randomize"
          onClickHandler={props.randomizeClickHandler}
          isDisabled={props.isSorting}
        />
        <Select
          value={props.algType}
          onChangeHandler={props.algChangeHandler}
          values={[0, 1]}
          options={["Bubble Sort", "Selection Sort"]}
          isDisabled={props.isSorting}
        />
        <Select
          value={props.size}
          onChangeHandler={props.sizeChangeHandler}
          values={[5, 10, 25, 50, 75, 100]}
          options={[5, 10, 25, 50, 75, 100]}
          isDisabled={props.isSorting}
        />
        <Select
          value={props.speed}
          onChangeHandler={props.speedChangeHandler}
          values={[0.25, 0.5, 1, 2, 4]}
          options={["0.25x", "0.5x", "1x", "2x", "4x"]}
          isDisabled={props.isSorting}
        />
      </div>
    </div>
  );
};

export default Navbar;
