import React, { useContext } from "react";
import classes from "./meal.module.css";
import MealItem from "./MealItem";
import data from "../mealData/mealData";

const Meal = () => {
  const meals = useContext(data);
  return (
    <ul className={classes.meal}>
      {meals.map((meal, index) => {
        return (
          <div key={index}>
            <MealItem meal={meal} id={index} />
            <hr className={classes.hr} />
          </div>
        );
      })}
    </ul>
  );
};

export default Meal;
