import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/NavBar/Navbar";

const Planning = () => {
  return (
    <div className="container">
      <Header Modifier={"header--logged"} isLogged={true} />
      <Navbar />
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="">Income</a>
            </li>
            <li>
              <a href="">Expense</a>
            </li>
            <li>
              <a href="">Category</a>
            </li>
          </ul>
        </nav>
        <div>
          <header>
            <h2>Incomes</h2>
          </header>
          <section>
            <form action="">
              <input type="search" name="" id="" />
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
                <tr>
                  <td>Income</td>
                  <td>Wage</td>
                  <td>11-08-2024</td>
                  <td>R$300</td>
                  <td>
                    <i>Editar</i>
                    <i>Deletar</i>
                  </td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>Wage</td>
                  <td>11-08-2024</td>
                  <td>R$300</td>
                  <td>
                    <i>Editar</i>
                    <i>Deletar</i>
                  </td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>Wage</td>
                  <td>11-08-2024</td>
                  <td>R$300</td>
                  <td>
                    <i>Editar</i>
                    <i>Deletar</i>
                  </td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>Wage</td>
                  <td>11-08-2024</td>
                  <td>R$300</td>
                  <td>
                    <i>Editar</i>
                    <i>Deletar</i>
                  </td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>Wage</td>
                  <td>11-08-2024</td>
                  <td>R$300</td>
                  <td>
                    <i>Editar</i>
                    <i>Deletar</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <div>
            <button>Prev</button>
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
            </ul>
            <button>Prev</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
