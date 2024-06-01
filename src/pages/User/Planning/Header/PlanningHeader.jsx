import React from "react";
import "./PlanningHeader.scss";
import { NavLink } from "react-router-dom";

const PlanningHeader = () => {
  return (
    <nav>
      <ul className="planning-menu">
        <li className={"planning-menu-item"}>
          <NavLink to={"/account/planning/income"}>
            Income
            <span></span>
          </NavLink>
        </li>
        <li className="planning-menu-item">
          <NavLink to={"/account/planning/expense"}>
            Expense
            <span></span>
          </NavLink>
        </li>
        <li className="planning-menu-item ">
          <NavLink to={"/account/planning/category"}>
            Category<span></span>
          </NavLink>
        </li>
        <span></span>
      </ul>
    </nav>
  );
};

export default PlanningHeader;
