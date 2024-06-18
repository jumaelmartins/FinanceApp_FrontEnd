import React from "react";
import EditItem from "../Icons/EditItem";
import DeleteItem from "../Icons/DeleteItem";

const TableRow = ({ type, data, handleEdit, handleDelete }) => {
  return (
    <>
      <tbody>
        {data &&
          type === "income" &&
          data.map((data) => {
            return (
              <tr id={data.id} key={data.id}>
                <td>Income</td>
                <td>{data.category.category_name || null}</td>
                <td>{data.date || data.month}</td>
                <td>R$ {data.amount || data.planned_amount}</td>
                <td>
                  <button type="button">
                    <i onClick={handleEdit}>
                      <EditItem />
                    </i>
                  </button>
                  <button type="button">
                    <i onClick={handleDelete}>
                      <DeleteItem />
                    </i>
                  </button>
                </td>
              </tr>
            );
          })}

        {data &&
          type === "expense" &&
          data.map((data) => {
            return (
              <tr id={data.id} key={data.id}>
                <td>Expense</td>
                <td>{data.type.type || null}</td>
                <td>{data.category.category_name || null}</td>
                <td>{data.date || data.month}</td>
                <td>R$ {data.amount || data.planned_amount}</td>
                <td>
                  <button type="button">
                    <i onClick={handleEdit}>
                      <EditItem />
                    </i>
                  </button>
                  <button type="button">
                    <i onClick={handleDelete}>
                      <DeleteItem />
                    </i>
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default TableRow;
