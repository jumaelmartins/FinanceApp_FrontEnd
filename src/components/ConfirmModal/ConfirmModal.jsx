// ConfirmModal.js
import React from "react";
import Modal from "../Modal/Modal";

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <p>Tem certeza que deseja deletar este item?</p>
      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};

export default ConfirmModal;
