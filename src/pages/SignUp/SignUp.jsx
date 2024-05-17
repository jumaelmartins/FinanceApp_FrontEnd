import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <Header Modifier="header--sign-up" isLogged={false} />
      <article className="grid-container">
        <section className="grid-column grid-column--two">
          <h2 className="title title--secundary">Create your account</h2>
          <Form login={false} />
        </section>
        <section className="grid-column grid-column--one">
          <h1 className="title">Already have an account?</h1>
          <Button modifier={"btn--primary"} text={"Sign In"} />
          <div className="img-container">
            <img src="src/assets/imgs/signup.svg" />
          </div>
        </section>
      </article>
    </>
  );
};

export default SignUp;
