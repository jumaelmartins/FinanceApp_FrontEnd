import React from "react";
import "./Card.scss";

const Card = ({ icon, amount, label, plan, delt, deltValue, chart }) => {
  return (
    <li className="card-wrapper">
      <div className="card-first-column">
        {icon}
        <p className="card-amount">{amount}</p>
        <p className="card-label">{label}</p>
      </div>
      {plan && delt ? (
        <div className="card-second-column">
          <div className="card-second-column-first-row">
            <p>Plan</p>
            <p>{plan}</p>
          </div>
          <div className="card-second-column-second-row">
            <p>Delt</p>
            <p
              className={`delt delt-${label.toLowerCase()}${
                deltValue < 0
                  ? "-negative"
                  : deltValue === 0
                  ? "-equal"
                  : "-positive"
              }`}
            >
              {delt}
            </p>
            <div className="chart">{chart}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default Card;
