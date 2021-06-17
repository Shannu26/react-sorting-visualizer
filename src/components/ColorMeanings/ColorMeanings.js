import "./ColorMeanings.css";

const ColorMeanings = () => {
  return (
    <div className="color-meanings">
      <div>
        <span style={{ backgroundColor: "gray" }}></span>
        <p>Unsorted</p>
      </div>
      <div>
        <span style={{ backgroundColor: "red" }}></span>
        <p>Comparing</p>
      </div>
      <div>
        <span style={{ backgroundColor: "yellow" }}></span>
        <p>Swapping</p>
      </div>
      <div>
        <span style={{ backgroundColor: "orange" }}></span>
        <p>Overwriting from Memory</p>
      </div>
      <div>
        <span style={{ backgroundColor: "green" }}></span>
        <p>Sorted</p>
      </div>
    </div>
  );
};

export default ColorMeanings;
