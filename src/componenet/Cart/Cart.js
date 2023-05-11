import React, { useContext } from "react";
import classes from "./cart.module.css";
import CartCtx from "./CartCtx";
import totalMeal from "./addedmealdata/totalmeal";

const Cart = () => {
  const popUp = useContext(CartCtx);
  const total = useContext(totalMeal);
  return (
    <div
      className={classes.cart}
      onClick={() => {
        popUp.show();
      }}
    >
      <i className="fa fa-light fa-cart-shopping"></i>
      <h2>Your Cart</h2>
      <h3>{total.total}</h3>
    </div>
  );
};

export default Cart;
