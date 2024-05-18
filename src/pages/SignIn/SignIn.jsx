import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <>
      <div className="container">
        <section className="sign-in-column-one">
          <h1 className="title">Save your money!</h1>
          <p className="text">
            the best solution for you to take control of your finances, all in
            one place, create your account now.
          </p>
          <Button
            to={"/signup"}
            modifier={"btn--primary shining"}
            text={"Sign Up"}
          />
          <div className="img-container">
            <img className="bounce" src="src/assets/imgs/main.svg" />
          </div>
        </section>

        <section className="sign-in-column-two">
          <Header Modifier="header--sign-in" isLogged={false} />
          <h2 className="title title--secundary">Welcome Back My Dear!</h2>
          <Form login={true} />
        </section>
      </div>
    </>
  );
};

export default SignIn;
