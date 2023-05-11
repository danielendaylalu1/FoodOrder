import React, { useContext } from "react";
import classes from "./addedmeal.module.css";
import addedMealData from "../addedmealdata/addedMealData";
import totalMeal from "../addedmealdata/totalmeal";
import AddedMealDescription from "./AddedMealDescription";

const AddedMeal = (props) => {
  const ctx = useContext(addedMealData);
  const total = useContext(totalMeal);

  return (
    <>
      <li className={classes.addedMeal}>
        <AddedMealDescription meal={props.meal} />
        <div className={classes.addedMealChange}>
          <button
            type="button"
            id={props.id}
            onClick={() => {
              ctx.map((meal, index) => {
                return props.id === index && meal.amount > 0
                  ? (meal.amount -= 1)
                  : "";
              });
              total.removeTotal(1);
            }}
          >
            -
          </button>
          <button
            type="button"
            id={props.id}
            onClick={() => {
              ctx.map((meal, index) => {
                return props.id === index && meal.amount >= 0
                  ? (meal.amount += 1)
                  : "";
              });
              total.changeTotal(1);
            }}
          >
            +
          </button>
        </div>
      </li>
      <hr />
    </>
  );
};

export default AddedMeal;
