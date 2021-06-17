import "./Description.css";

import { algDescriptions } from "../../helpers/algDescription";

const Description = (props) => {
  let algType = "Bubble Sort";
  switch (props.algType) {
    case 0:
      algType = "Bubble Sort";
      break;
    case 1:
      algType = "Selection Sort";
      break;
    case 2:
      algType = "Insertion Sort";
      break;
    default:
      break;
  }
  return (
    <div className="desc-wrapper">
      <h1>{algType}</h1>
      <div className="description">
        <div className="explanation">
          <p>{algDescriptions[algType].description}</p>
          <a
            href={algDescriptions[algType].url}
            className="url"
            target="_window"
          >
            Know More
          </a>
        </div>
        <div className="performance">
          <h2>Performance</h2>
          <p>{`Worst-Case Time Complexity \t ${algDescriptions[algType].performance.timeComplexity.worst}`}</p>
          <p>{`Average Time Complexity \t ${algDescriptions[algType].performance.timeComplexity.avg}`}</p>
          <p>{`Besst-Case Time Complexity \t ${algDescriptions[algType].performance.timeComplexity.best}`}</p>
          <p>{`Worst-Case Space Complexity \t ${algDescriptions[algType].performance.spaceComplexity}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
