import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import DonutChart from "./Charts/DonutChart";
import ColumnChart from "./Charts/ColumnChart";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import LineChart2 from "./Charts/LineChart-2";
import Card from "../../components/Card/Card";
import Expense from "../../components/Icons/Expense";
import Income from "../../components/Icons/Income";
import CashFlow from "../../components/Icons/CashFlow";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header Modifier={"header--dashboard"} isLogged={true} />
      <Navbar />
      <div className="dashboard-wrapper">
        <section className="dashboard-wrapper-first-row">
          <div className="first-column">
            <ul className="card-container">
              <Card
                icon={<Expense />}
                label={"Expense"}
                amount={"110.5k"}
                plan={"90.5k"}
                delt={"20k"}
                deltValue={1}
                chart={<LineChart2 />}
              />
              <Card
                icon={<Income />}
                label={"Income"}
                amount={"120.5k"}
                plan={"120.5k"}
                delt={"0"}
                deltValue={0}
                chart={<LineChart2 />}
              />
              <Card icon={<CashFlow />} label={"CashFlow"} amount={"10k"} />
            </ul>
            {/* <div className="column-chart-one">
              <ColumnChart />
            </div> */}
          </div>
          <div className="second-column">
            <DonutChart />
            <DonutChart />
          </div>
        </section>
        {/* <section className="dashboard-row-two">
          <div className="primera-coluna">
            <BarChart />
            <BarChart />
          </div>
          <div className="segunda-coluna">
            <ColumnChart />
            <LineChart />
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Dashboard;
