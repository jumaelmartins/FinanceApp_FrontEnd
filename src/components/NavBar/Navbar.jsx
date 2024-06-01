import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Dashboard from "../Icons/Dashboard";
import Post from "../Icons/Post";
import Planning from "../Icons/Planning";
import ManageAccount from "../Icons/ManageAccount";
import Logout from "../Icons/Logout";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className="nav-container">
      <button
        className={`menu-btn${menu ? " menu-btn--active" : ""}`}
        onClick={() => setMenu(!menu)}
      ></button>
      <ul className="menu-icons-list">
        <li>
          <NavLink to={"/account/dashboard"}>
            <Dashboard />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/account/planning"}>
            <Planning />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/account/lancamentos"}>
            <Post />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/account/settings"}>
            <ManageAccount />
          </NavLink>
        </li>
        <li onClick={userLogout}>
          <Logout />
        </li>
      </ul>
      <ul className={`menu-list${menu ? " activeMenu" : ""}`}>
        <li>
          <NavLink to={"/account/dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/account/planning"}>Planning</NavLink>
        </li>
        <li>
          <NavLink to={"/account/lancamentos"}>Lançamentos</NavLink>
        </li>
        <li>
          <NavLink to={"/account/settings"}>Ajustes</NavLink>
        </li>
        <li onClick={userLogout}>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
