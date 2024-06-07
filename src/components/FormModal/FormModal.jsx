// FormModal.js
import React from "react";
import Modal from "../Modal/Modal";
import FormAddEdit from "../FormAddEdit/FormAddEdit";

const FormModal = ({
  onSubmit,
  show,
  onClose,
  initialData,
  children,
  title,
}) => {
  return (
    <Modal title={title} show={show} onClose={onClose}>
      <FormAddEdit onClose={onClose} onSubmit={onSubmit} initialData={initialData}>
        {children}
      </FormAddEdit>
    </Modal>
  );
};

export default FormModal;
