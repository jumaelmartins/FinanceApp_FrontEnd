import React from "react";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/NavBar/Navbar";
import Income from "./Income/Income";
import "./Planning.scss";
import PlanningHeader from "./Header/PlanningHeader";

const Planning = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="planning-container">
        <div className="planning-group">
          <PlanningHeader />
          <Income />
        </div>
      </div>
    </div>
  );
};

export default Planning;
