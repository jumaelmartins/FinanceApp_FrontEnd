import Button from "../Button/Button";
import Email from "../Icons/Email";
import Lock from "../Icons/Lock";
import { Input } from "../Input/Input";
import "./Form.scss";

export const Form = ({login}) => {
  return (
    <form className="form" action="">
      <fieldset className="form-container">
        {!login && <Input placeholder={"username"} id={"username"} icon={<Email />} />}
        <Input placeholder={"email"} id={"email"} icon={<Email />} />
        <Input placeholder={"password"} id={"password"} icon={<Lock />} />
      </fieldset>
      <Button modifier={"btn--primary btn--small"} text={"Sign In"} />
    </form>
  );
};
