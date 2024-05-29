import React from "react";
import { Api } from "../api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
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
      // await getUser(json);
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
    setData(json);
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
      value={{ userLogin, getUser, data, login, userLogout, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
