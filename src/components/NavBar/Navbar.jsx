import React from "react";
import { Link, Navigate } from "react-router-dom";
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
        className={`menu-btn${menu ? " active" : ""}`}
        onClick={() => setMenu(!menu)}
      ></button>
      <ul className="menu-icons-list">
        <li>
          <Dashboard />
        </li>
        <li>
          <Planning />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <ManageAccount />
        </li>
        <li onClick={userLogout}>
          <Logout />
        </li>
      </ul>
      <ul className={`menu-list${menu ? " activeMenu" : ""}`}>
        <li  className="activeItem">
          <Link to={"/account/dashboard"} >Dashboard</Link>
        </li>
        <li >
          <Link to={"/account/planning"}>Planning</Link>
        </li>
        <li >
          <Link to={"/account/planning"} >Lançamentos</Link>
        </li>
        <li >
          <Link to={"/account/settings"} >Ajustes</Link>
        </li>
        <li onClick={userLogout}>
          <Link>Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
