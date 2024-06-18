import React from "react";
import Button from "../Form/Button/Button";

const ModalForm = ({ onSubmit, children, onClose }) => {
  return (
    <form method="dialog" onSubmit={onSubmit}>
      {children}
      <Button
        onClick={onClose}
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
      />
    </form>
  );
};

export default ModalForm;
