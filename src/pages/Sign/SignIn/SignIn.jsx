import Button from "../../../components/Form/Button/Button";
import Header from "../../../components/Header/Header";
import signinImage from "../../../assets/imgs/signin.svg";
import "./SignIn.scss";
import { Input } from "../../../components/Form/Input/Input";
import Email from "../../../components/Icons/Email";
import Lock from "../../../components/Icons/Lock";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { UserContext } from "../../../context/UserContext";
import Error from "../../../components/Form/Error/Error";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const { userLogin, error, loading, login } = React.useContext(UserContext);

  if (login === true) return <Navigate to={"/"} />;

  const schema = yup
    .object({
      email: yup
        .string()
        .required("Campo Email é Obigatorio")
        .email("Informe um email valido"),
      password: yup.string().required("Campo Senha é Obrigatorio"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    userLogin(data);
  };

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
            to={"/sign/up"}
            modifier={"btn--primary shining"}
            text={"Sign Up"}
          />
          <div className="img-container">
            <img className="bounce" src={signinImage} />
          </div>
        </section>

        <section className="sign-in-column-two">
          <Header Modifier="header--sign-in" isLogged={false} />
          <h2 className="title title--secundary">Welcome Back My Dear!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form" action="">
            <fieldset className="form-container">
              <Input
                type={"email"}
                register={register}
                placeholder={"email"}
                id={"email"}
                icon={<Email />}
                errors={errors.email?.message}
              />
              <Input
                type={"password"}
                errors={errors.password?.message}
                register={register}
                placeholder={"password"}
                id={"password"}
                icon={<Lock />}
              />
            </fieldset>
            {loading ? (
              <Button
                isFormBtn={true}
                modifier={"btn--primary btn--small btn--animation-one"}
                text={"Carregando"}
                disabled={true}
              />
            ) : (
              <Button
                isFormBtn={true}
                modifier={"btn--primary btn--small btn--animation-one"}
                text={"Sign Up"}
              />
            )}
            {error && <Error>{error}</Error>}
          </form>
        </section>
      </div>
    </>
  );
};

export default SignIn;
