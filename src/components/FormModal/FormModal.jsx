// FormModal.js
import React from "react";
import Modal from "../Modal/Modal";
import FormAddEdit from "../FormAddEdit/FormAddEdit";

const FormModal = ({ show, onClose, onSubmit, initialData, children }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <FormAddEdit onSubmit={onSubmit} initialData={initialData}>
        {children}
      </FormAddEdit>
    </Modal>
  );
};

export default FormModal;
