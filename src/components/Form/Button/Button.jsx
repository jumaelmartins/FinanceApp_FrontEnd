import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ modifier, text, to, isFormBtn, disabled, type, onClick }) => {
  return (
    <>
      {isFormBtn ? (
        <button
          onClick={onClick}
          type={type}
          disabled={disabled}
          to={to}
          className={"btn " + modifier}
        >
          {text}
        </button>
      ) : (
        <Link to={to} className={"btn " + modifier}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
