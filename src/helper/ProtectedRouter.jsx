import React from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to={"/sign"} />;
  } else {
    return <></>;
  }
};

export default ProtectedRouter;
