import React from "react";
import { Api } from "../api/api";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [session, setSession] = React.useState(null);
  const navigate = useNavigate();

  const userLogin = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const { url, options } = Api.Session(data);
      const response = await fetch(url, options);
      if (response.status !== 200)
        throw new Error(`Error: usuario ou senha incorretos`);
      const json = await response.json();
      window.localStorage.setItem("session", JSON.stringify(json));
      setSession(json);
      await getUser(json);
      setLogin(true);
      navigate("/account/dashboard");
    } catch (err) {
      setError(err.message);
      setLogin(false);
      navigate("/sign");
    } finally {
      setLoading(false);
    }
  };

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);
    window.localStorage.removeItem("session");
    navigate("/sign");
  }, [navigate]);

  const getUser = async (session) => {
    const { url, options } = Api.GetUser(session);
    const response = await fetch(url, options);
    const json = await response.json();
    setSession(session)
    setData(json);
  };

  const schema = (formType) => {
    return yup.object({
      username:
        formType === "userFormSignUp" || formType === "userFormEdit"
          ? yup.string().required("Campo Username é Obrigatorio")
          : yup.string(),
      email:
        formType === "userForm"
          ? yup
              .string()
              .required("Campo Email é Obigatorio")
              .email("Informe um email valido")
          : yup.string(),
      password:
        formType === "userForm"
          ? yup.string().required("Campo Senha é Obrigatorio")
          : yup.string(),
      month: yup.date(),
      date: yup.date(),
      amount: yup.number(),
      planned_amount: yup.number(),
    });
  };

  React.useEffect(() => {
    const autoLogin = async () => {
      const session = window.localStorage.getItem("session");
      if (session) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = Api.TokenValidate(JSON.parse(session));
          const response = await fetch(url, options);
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          await getUser(JSON.parse(session));
          setLogin(true);
          navigate("/account/dashboard");
        } catch (err) {
          setError(err.message);
          userLogout();
          setLogin(false);
          navigate("/sign");
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    login !== true ? autoLogin() : "";
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        getUser,
        data,
        login,
        userLogout,
        error,
        loading,
        schema,
        session,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
