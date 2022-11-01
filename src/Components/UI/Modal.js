import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { useStateContext } from "../../Context/ContextProvider";

const Backdrop = (props) => {
  return (
    <div
      className="bg-half-transparent w-full h-screen fixed nav-item top-0 right-0"
      onClick={props.onClose}
    ></div>
  );
};
const ModalContent = (props) => {
  const { currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className={props.classes}>{props.children}</div>
    </div>
  );
};

const portalElemaent = document.getElementById("overlay");

function Modal(props) {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElemaent)}
      {createPortal(
        <ModalContent classes={props.classes}>{props.children}</ModalContent>,
        portalElemaent
      )}
    </>
  );
}

export default Modal;
