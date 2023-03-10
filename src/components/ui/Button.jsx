import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${style.button} ${props.className}`}
      type={props.type || "submit"}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;;
