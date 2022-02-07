import React, { useState } from "react";
import modalStyle from "./css/Modal.module.css";

function Modal() {
  const [modalState, setModalState] = useState(false);
  const onModal = () => {
    setModalState((state) => !state);
  };
  const offModal = () => {
    setModalState((state) => !state);
  };
  return (
    <div className={modalStyle.outer}>
      <h1 className={modalStyle.title}>Modal</h1>
      <button className={modalStyle.modalBtn} onClick={onModal}>
        Open Modal
      </button>
      {modalState && (
        <div className={modalStyle.modalOuter}>
          <div className={modalStyle.modal}>
            <span className={modalStyle.modalClose} onClick={offModal}>
              &times;
            </span>
            <h2>Hello Modal!</h2>
          </div>
        </div>
      )}
    </div>
  );
}
export default Modal;
