import React from "react";
import classes from "./choosemeal.module.css";

const ChooseMeal = (props) => {
  return (
    <div className={classes.choosemeal} id={props.id}>
      <h1 className={classes.name}>{props.meal.name}</h1>
      <h3 className={classes.description}>{props.meal.description}</h3>
      <h2 className={classes.price}>${props.meal.price}</h2>
    </div>
  );
};

export default ChooseMeal;
