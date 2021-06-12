import "./Select.css";

const Select = (props) => {
  let options = props.options.map((option, i) => {
    return (
      <option value={props.values[i]} key={option}>
        {option}
      </option>
    );
  });
  return (
    <select
      value={props.value}
      onChange={props.onChangeHandler}
      disabled={props.isDisabled}
      className="select"
    >
      {options}
    </select>
  );
};

export default Select;
