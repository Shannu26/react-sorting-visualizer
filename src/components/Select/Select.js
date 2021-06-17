import "./Select.css";
import { useState, useRef, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

const Select = (props) => {
  const [showList, setShowList] = useState(false);
  const [index, setIndex] = useState(props.index);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  });

  const outsideClickHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowList(false);
    }
  };

  const showListHandler = () => {
    setShowList((prevState) => !prevState);
  };

  const listClickHandler = (e, i) => {
    setIndex(i);
    setShowList(false);
    props.onChangeHandler(e);
    console.log(e.target.value);
  };

  let options = props.options.map((option, i) => {
    return (
      <li
        value={props.values[i]}
        key={option}
        onClick={(e) => listClickHandler(e, i)}
      >
        {option}
      </li>
    );
  });

  return (
    <div id="select" ref={ref}>
      <button onClick={showListHandler} disabled={props.isDisabled}>{`${
        props.title ? props.title + ":" : ""
      } ${props.options[index]}`}</button>
      <i
        className={`fa fa-caret-down ${props.className ? props.className : ""}`}
      ></i>
      {showList && <ul className="options">{options}</ul>}
    </div>
  );
};

export default Select;
