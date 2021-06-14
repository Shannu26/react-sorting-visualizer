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
          values={[0, 1, 2]}
          index="0"
          options={["Bubble Sort", "Selection Sort", "Insertion Sort"]}
          isDisabled={props.isSorting}
        />
        <Select
          value={props.size}
          onChangeHandler={props.sizeChangeHandler}
          values={[5, 10, 25, 50, 75, 100]}
          options={[5, 10, 25, 50, 75, 100]}
          index="1"
          isDisabled={props.isSorting}
          title="Size"
        />
        <Select
          value={props.speed}
          onChangeHandler={props.speedChangeHandler}
          values={[5, 4, 3, 2, 1]}
          index="2"
          options={["0.25x", "0.5x", "1x", "2x", "4x"]}
          isDisabled={props.isSorting}
          title="Speed"
        />
      </div>
    </div>
  );
};

export default Navbar;
