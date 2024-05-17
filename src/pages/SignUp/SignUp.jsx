import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <Header Modifier="header--login" isLogged={false} />
      <article className="grid-container">
        <section className="grid-column grid-column--one">
          <h1 className="title">Save your money!</h1>
          <p className="text">
            the best solution for you to take control of your finances, all in
            one place, create your account now.
          </p>
          <Button modifier={"--primary"} text={"Sign In"} />
          <img className="img" src="src/assets/imgs/main.svg" />
        </section>
        <section className="grid-column grid-column--two">
          <h2 className="title title--secundary">Welcome Back My Dear!</h2>
          <Form login={true} />
        </section>
      </article>
    </>
  );
};

export default SignUp;
