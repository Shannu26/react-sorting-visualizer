import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      onClick={props.onClickHandler}
      disabled={props.isDisabled}
    >
      {props.btnName}
    </button>
  );
};

export default Button;
