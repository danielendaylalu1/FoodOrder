import React, { useContext, useState } from "react";
import classes from "./modal.module.css";
import MealModal from "./MealModal";
import CartCtx from "../CartCtx";

const Modal = () => {
  const ctx = useContext(CartCtx)
  const [hide, setHide] = useState(false);
  return (
    <div
      className={`${hide ? classes.hide : ""}`}
    >
      <div
        className={`${classes.modal} ${hide ? classes.hide : ""}`}
        onClick={() => {
          setHide(true);
          ctx.hide()
        }}
      ></div>
      <MealModal />
    </div>
  );
};

export default Modal;
