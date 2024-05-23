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
    <div className="wrapper">
      <Header Modifier={"header--logged"} isLogged={true} />
      <Navbar />
      <div className="dashboard-wrapper">
        <div className="dashboard-first-row">
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
            <div className="donut-wrapper">
              <DonutChart
                title={"Despesas Por Categoria"}
                values={[700, 500]}
                labels={["Despesas Fixas", "Despesas Variaveis"]}
                colors={["#BC72E9", "#581D7C"]}
              />
              <DonutChart
                title={"Despesas Por Metodo de Pagamento"}
                values={[300, 900]}
                labels={["Pix", "Cartão"]}
                colors={["#BC72E9", "#581D7C"]}
              />
            </div>
            <div className="column-chart-wrapper--first">
              <ColumnChart
              classContainer={"chart-container--column-one"}
                cat={["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}
                planned={[50, 100, 80, 50, 60, 100, 30, 91, 80, 34, 91, 31]}
                real={[50, 93, 100, 80, 70, 90, 80, 91, 86, 94, 100, 20]}
                title={"Despesas mês a mês"}
              />
            </div>
          </div>
          <div className="dashboard-second-row">
            <div className="bar-chart-wrapper">
              <BarChart />
              <BarChart />
            </div>
            <div className="column-chart-wrapper--second">
              <ColumnChart
              classContainer={"chart-container--column-two"}
                cat={["Cat1", "Cat2", "Cat3", "Cat4", "Cat5", "Cat6"]}
                planned={[50, 100, 30, 80, 91, 31]}
                real={[50, 93, 100, 80, 91, 94]}
                title={"Despesas Por Categoria"}
              />
              <LineChart />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
