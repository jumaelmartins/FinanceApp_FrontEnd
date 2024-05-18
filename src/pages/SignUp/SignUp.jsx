import Button from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <section className="sign-up-column-one">
          <h2 className="title title--secundary">Create your account</h2>
          <Form login={false} />
        </section>
        <section className="sign-up-column-two">
          <Header Modifier="header--sign-up" isLogged={false} />
          <h1 className="title">Already have an account?</h1>
          <Button
            to={"/signin"}
            modifier={"btn--primary margin shining"}
            text={"Sign In"}
          />
          <div className="img-container">
            <img className="bounce" src="src/assets/imgs/signup.svg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
