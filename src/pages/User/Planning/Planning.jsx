import React from "react";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/NavBar/Navbar";
import Income from "./Income/Income";
import "./Planning.scss";
import PlanningHeader from "./Header/PlanningHeader";
import { Navigate, Route, Routes } from "react-router-dom";
import Expense from "./Expense/Expense";
import Category from "./Category/Category";
const Planning = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="planning-container">
          <div className="planning-group">
            <PlanningHeader />
            <Routes>
              <Route
                path="/"
                element={<Navigate to={"/account/planning/income"} />}
              />
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/category" element={<Category />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
