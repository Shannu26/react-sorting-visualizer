import "./Sidebar.css";
import Button from "../Button/Button";
import Select from "../Select/Select";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Button
        btnName="Randomize"
        onClickHandler={props.randomizeClickHandler}
        isDisabled={props.isSorting}
      />
      <Select
        value={props.algType}
        className="sidebar-i"
        onChangeHandler={props.algChangeHandler}
        values={[0, 1, 2]}
        index={[0, 1, 2].findIndex((el) => el === props.algType)}
        options={["Bubble Sort", "Selection Sort", "Insertion Sort"]}
        isDisabled={props.isSorting}
      />
      <Select
        value={props.size}
        className="sidebar-i"
        onChangeHandler={props.sizeChangeHandler}
        values={[5, 10, 25, 50, 75, 100]}
        options={[5, 10, 25, 50, 75, 100]}
        index={[5, 10, 25, 50, 75, 100].findIndex((el) => el === props.size)}
        isDisabled={props.isSorting}
        title="Size"
      />
      <Select
        value={props.speed}
        className="sidebar-i"
        onChangeHandler={props.speedChangeHandler}
        values={[5, 4, 3, 2, 1]}
        index={[5, 4, 3, 2, 1].findIndex((el) => el === props.speed)}
        options={["0.25x", "0.5x", "1x", "2x", "4x"]}
        isDisabled={props.isSorting}
        title="Speed"
      />
    </div>
  );
};

export default Sidebar;
