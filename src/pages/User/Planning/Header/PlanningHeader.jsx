import React from "react";
import "./PlanningHeader.scss";

const PlanningHeader = () => {
  return (
    <nav>
      <ul className="planning-menu">
        <li className="planning-menu-item active-item">
          <a href="">Income</a>
          <span></span>
        </li>
        <li className="planning-menu-item">
          <a href="">Expense</a>
          <span></span>
        </li>
        <li className="planning-menu-item ">
          <a href="">Category</a>
          <span></span>
        </li>
        <span></span>
      </ul>
    </nav>
  );
};

export default PlanningHeader;
