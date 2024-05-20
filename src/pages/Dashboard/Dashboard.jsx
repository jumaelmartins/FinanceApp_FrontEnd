import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import DonutChart from "./Charts/DonutChart";
import ColumnChart from "./Charts/ColumnChart";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";

const Dashboard = () => {
  return (
    <div className="container--2">
      <Header Modifier={"header--dashboard"} isLogged={true} />
      <Navbar />
      <div className="container-dashboard">
        <section className="dashboard-row-one">
          <div className="coluna-1">
            <ul className="card-list">
              <li className="card">Card</li>
              <li className="card">card</li>
              <li className="card">card</li>
            </ul>
            <div className="column-chart-one">
              <ColumnChart />
            </div>
          </div>
          <div className="coluna-2">
            <DonutChart />
            <DonutChart />
          </div>
        </section>
        <section className="dashboard-row-two">
          <div className="primera-coluna">
            <BarChart />
            <BarChart />
          </div>
          <div className="segunda-coluna">
            <ColumnChart />
            <LineChart />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
