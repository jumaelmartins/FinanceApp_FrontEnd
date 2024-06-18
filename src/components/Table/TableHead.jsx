import React from "react";

const TableHead = ({ type }) => {
  return (
    <thead>
      {type === "income" ? (
        <tr>
          <th>Type</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      ) : (
        <tr>
          <th>Type</th>
          <th>ExpenseType</th>
          <th>Category</th>
          <th>Month</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      )}
    </thead>
  );
};

export default TableHead;
