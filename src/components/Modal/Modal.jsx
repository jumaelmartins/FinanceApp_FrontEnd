import React from "react";
import "./Modal.scss";

const Modal = ({ show, children, title, onClose }) => {
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;

    if (show) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [show, onClose]);

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
