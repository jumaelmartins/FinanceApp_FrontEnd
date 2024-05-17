import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <>
      <Header Modifier="header--sign-in" isLogged={false} />
      <article className="grid-container">
        <section className="grid-column grid-column--one">
          <h1 className="title">Save your money!</h1>
          <p className="text">
            the best solution for you to take control of your finances, all in
            one place, create your account now.
          </p>
          <Button modifier={"btn--primary"} text={"Sign Up"} />
          <div className="img-container">
            <img src="src/assets/imgs/main.svg" />
          </div>
        </section>
        <section className="grid-column grid-column--two">
          <h2 className="title title--secundary">Welcome Back My Dear!</h2>
          <Form login={true} />
        </section>
      </article>
    </>
  );
};

export default SignIn;
