import React from "react";
import "./Modal.scss";

const Modal = ({ show, onClose, children, title }) => {
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show]);

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
