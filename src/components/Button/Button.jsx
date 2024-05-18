import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ modifier, text, to, isFormBtn }) => {
  return (
    <>
      {isFormBtn ? (
        <button to={to} className={"btn " + modifier}>
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
