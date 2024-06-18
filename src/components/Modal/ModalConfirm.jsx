import React from "react";

const ModalConfirm = ({ onClose, onConfirm }) => {
  return (
    <>
      <p>Tem certeza que deseja deletar este item?</p>
      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onClose}>Cancelar</button>
    </>
  );
};

export default ModalConfirm;
