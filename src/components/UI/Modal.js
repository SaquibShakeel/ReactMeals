import React from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
    return (
      <React.Fragment>
        {ReactDom.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, portalElement)}
        {ReactDom.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </React.Fragment>
    );
};

export default Modal;