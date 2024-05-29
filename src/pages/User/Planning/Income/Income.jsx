import React from "react";
import PlanningFooter from "../Footer/PlanningFooter";
import { Input } from "../../../../components/Form/Input/Input";

const Income = () => {
  return (
    <div className="planning">
      <section className="">
        <h2>Planned Incomes</h2>
        <form action="">
            <input type="text" />
        </form>
        <i>Icone add</i>
      </section>
      <section>
        <table>
          <thead>
            <th>Type</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <tr key={i}>
                  <td>Income</td>
                  <td>Wage</td>
                  <td>1{i}-08-2024</td>
                  <td>R$30{i}</td>
                  <td>
                    <i>Editar</i>
                    <i>Deletar</i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <PlanningFooter />
      </section>
    </div>
  );
};

export default Income;
