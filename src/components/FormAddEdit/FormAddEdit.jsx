// FormAddEdit.js
import React from "react";

const FormAddEdit = ({ onSubmit, initialData = {}, children }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormAddEdit;
