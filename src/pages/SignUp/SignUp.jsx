import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <Header Modifier="--login" isLogged={false} />
      <article className="sign-up-container">
        <section className="sign-up-container__column-1">
          <h1 className="sign-up-container__column-1__title">Save your money!</h1>
          <p className="sign-up-container__column-1__text">
            the best solution for you to take control of your finances, all in
            one place, create your account now.
          </p>
          <img className="sign-up-container__column-1__img" src="src/assets/imgs/main.svg" />
          <Button modifier={"primary"} text={"sign in"} />
        </section>
        <section className="sign-up-container__column-2">
          <h2>Welcome Back My Dear!</h2>
          <form action="">
            <fieldset>
              <input type="text" />
              <input type="text" />
            </fieldset>
          </form>
          <button>Sign Up!</button>
        </section>
      </article>
    </>
  );
};

export default SignUp;
