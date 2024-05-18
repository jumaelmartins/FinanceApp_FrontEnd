import Button from "../Button/Button";
import Email from "../Icons/Email";
import Lock from "../Icons/Lock";
import Username from "../Icons/Username";
import { Input } from "../Input/Input";
import "./Form.scss";

export const Form = ({ login }) => {
  return (
    <form className="form" action="">
      <fieldset className="form-container">
        {!login && (
          <Input placeholder={"username"} id={"username"} icon={<Username />} />
        )}
        <Input placeholder={"email"} id={"email"} icon={<Email />} />
        <Input placeholder={"password"} id={"password"} icon={<Lock />} />
      </fieldset>
      {!login && (
        <Button
          isFormBtn={true}
          modifier={"btn--primary btn--small btn--animation-one"}
          text={"Sign Up"}
        />
      )}
      {login && (
        <Button
          isFormBtn={true}
          modifier={"btn--primary btn--small btn--animation-one"}
          text={"Sign In"}
        />
      )}
    </form>
  );
};
