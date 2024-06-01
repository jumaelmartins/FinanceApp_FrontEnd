import React from "react";
import "./Header.scss";
import UserPicture from "../Icons/UserPicture";
import Logo from "../Icons/Logo";
import { UserContext } from "../../context/UserContext";
import ProfilePicture from "../../assets/imgs/Profile-Picture.png";

const Header = ({ Modifier }) => {
  const { login, data } = React.useContext(UserContext);
  const Picture = true;
  return (
    <header
      className={
        `header ${login === true ? "header--logged" : ""}` +
        (Modifier ? Modifier : "")
      }
    >
      <div className="logo">
        <Logo />
      </div>
      {login && (
        <div className={"user-info"}>
          <p className={"user-info__name"}> {data && data.username}</p>
          {Picture ? (
            <img className="profile-pic" src={ProfilePicture} />
          ) : (
            <UserPicture />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
