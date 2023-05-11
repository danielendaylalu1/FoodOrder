import React from "react";
import classes from "./mealItem.module.css";
import AddMeal from "./AddMeal";
import ChooseMeal from "./ChooseMeal";

const MealItem = (props) => {
  return (
    <li className={classes.mealItem}>
      <ChooseMeal meal={props.meal} id={props.id} />
      <AddMeal id={props.id} />
    </li>
  );
};

export default MealItem;
