import "./Header.scss";
import Logo from "../Icons/Logo";
import UserPicture from "../Icons/UserPicture";

const Header = ({ Modifier, isLogged }) => {
  return (
    <header className={"header " + Modifier}>
      <div className="logo deslizar">
        {/* <Logo props={"svg-logo"} /> */}
        <img src="/src/assets/icons/logo.svg" alt="logo" srcset="" />
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
