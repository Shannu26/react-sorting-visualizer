import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.onClickHandler} disabled={props.isDisabled}>
      {props.btnName}
    </button>
  );
};

export default Button;
