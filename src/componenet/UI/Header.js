import React from "react";
import Cart from "../Cart/Cart";
import classes from "./header.module.css";
import img from "./meals.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <Cart />
      </div>
      <img src={img} alt="meals" />
    </React.Fragment>
  );
};

export default Header;
