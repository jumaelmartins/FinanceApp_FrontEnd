import React from "react";
import "./Header.scss";
import UserPicture from "../Icons/UserPicture";
import Logo from "../Icons/Logo";

const Header = ({ Modifier, isLogged }) => {
  return (
    <header className={"header " + Modifier}>
      <div className="logo">
        <Logo />
      </div>
      {isLogged && (
        <div className={"user-info"}>
          <p className={"user-info__name"}>John Doe</p>
          <UserPicture />
        </div>
      )}
    </header>
  );
};

export default Header;
