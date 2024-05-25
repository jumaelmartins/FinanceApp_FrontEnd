import Button from "../../../components/Form/Button/Button";
import Header from "../../../components/Header/Header";
import signupImage from "../../../assets/imgs/signup.svg";
import "./SignUp.scss";
import Username from "../../../components/Icons/Username";
import Email from "../../../components/Icons/Email";
import Lock from "../../../components/Icons/Lock";
import { Input } from "../../../components/Form/Input/Input";
import "../../../components/Form/Form.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFetch from "../../../hooks/useFetch";
import { Api } from "../../../api/api";
import { UserContext } from "../../../context/UserContext";
import Error from "../../../components/Form/Error/Error";
import React from "react";

const SignUp = () => {
  const { loading, error, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  const schema = yup
    .object({
      username: yup.string().required("Campo Username é Obrigatorio"),
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
    const { response } = await request(
      Api.CreateUser(data).url,
      Api.CreateUser(data).options
    );
    if (response.ok) userLogin(data);
  };

  return (
    <>
      <div className="container">
        <section className="sign-up-column-one">
          <h2 className="title title--secundary">Create your account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form" action="">
            <fieldset className="form-container">
              <Input
                type={"text"}
                errors={errors.username?.message}
                register={register}
                placeholder={"username"}
                id={"username"}
                icon={<Username />}
              />
              <Input
                type={"email"}
                errors={errors.email?.message}
                register={register}
                placeholder={"email"}
                id={"email"}
                icon={<Email />}
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
                disabled={true}
                isFormBtn={true}
                modifier={"btn--primary btn--small btn--animation-one"}
                text={"Cadastrando .."}
              />
            ) : (
              <Button
                isFormBtn={true}
                modifier={"btn--primary btn--small btn--animation-one"}
                text={"Sign In"}
              />
            )}
            {error && <Error>{error}</Error>}
          </form>
        </section>
        <section className="sign-up-column-two">
          <Header Modifier="header--sign-up" isLogged={false} />
          <h1 className="title">Already have an account?</h1>
          <Button
            to={"/sign/in"}
            modifier={"btn--primary margin shining"}
            text={"Sign In"}
          />
          <div className="img-container">
            <img className="bounce" src={signupImage} />
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
