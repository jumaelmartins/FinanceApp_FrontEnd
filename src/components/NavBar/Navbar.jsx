import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Dashboard from "../Icons/Dashboard";
import Post from "../Icons/Post";
import Planning from "../Icons/Planning";
import ManageAccount from "../Icons/ManageAccount";
import Logout from "../Icons/Logout";

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);

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
        <li>
          <Logout />
        </li>
      </ul>
      <ul className={`menu-list${menu ? " activeMenu" : ""}`}>
        <li className="activeItem">
          <Link>Dashboard</Link>
        </li>
        <li>
          <Link>Planning</Link>
        </li>
        <li>
          <Link>Lançamentos</Link>
        </li>
        <li>
          <Link>Ajustes</Link>
        </li>
        <li>
          <Link>Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
