// FormAddEdit.js
import React from "react";
import Button from "../Form/Button/Button";
import "./FormAddEdit.scss";

const FormAddEdit = ({ onSubmit, initialData = {}, children, onClose }) => {
  return (
    <form method="dialog" onSubmit={onSubmit}>
      {children}
      <Button
        type={"reset"}
        isFormBtn={true}
        text={"Cancelar"}
        modifier={"btn--small"}
      />
      <Button
        type={"submit"}
        isFormBtn={true}
        text={"Confirmar"}
        modifier={"btn--small"}
        onClick={onClose}
      />
    </form>
  );
};

export default FormAddEdit;
