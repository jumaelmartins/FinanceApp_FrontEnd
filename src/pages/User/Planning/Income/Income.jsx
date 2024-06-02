import React from "react";
import PlanningFooter from "../Footer/PlanningFooter";
import AddItem from "../../../../components/Icons/AddItem";
import EditItem from "../../../../components/Icons/EditItem";
import DeleteItem from "../../../../components/Icons/DeleteItem";
import FormModal from "../../../../components/FormModal/FormModal";

const Income = () => {
  const [data, setData] = React.useState([]);
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [currentData, setCurrentData] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleAdd = () => {
    setIsEditing(false);
    setCurrentData(null);
    setShowFormModal(true);
    console.log("teste")
  };

  return (
    <>
      <FormModal show={showFormModal} onClose={() => setShowFormModal(false)}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </FormModal>
      <div className="planning">
        <header className="">
          <h2>Planned Incomes</h2>
          <form action=""></form>
          <i onClick={handleAdd}>
            <AddItem />
          </i>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <tr key={i}>
                    <td>Income</td>
                    <td>Wage</td>
                    <td>1{i}-08-2024</td>
                    <td>R$30{i}</td>
                    <td>
                      <button type="button">
                        <i>
                          <EditItem />
                        </i>
                      </button>
                      <button type="button">
                        <i>
                          <DeleteItem />
                        </i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <PlanningFooter />
        </section>
      </div>
    </>
  );
};

export default Income;
