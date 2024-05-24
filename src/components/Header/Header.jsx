import React from "react";
import "./Header.scss";
import UserPicture from "../Icons/UserPicture";
import Logo from "../Icons/Logo";
import { UserContext } from "../../context/UserContext";

const Header = ({ Modifier }) => {
  const { login, data } = React.useContext(UserContext);
  return (
    <header className={"header " + Modifier}>
      <div className="logo">
        <Logo />
      </div>
      {login && (
        <div className={"user-info"}>
          <p className={"user-info__name"}>{data && data.username}</p>
          <UserPicture />
        </div>
      )}
    </header>
  );
};

export default Header;
