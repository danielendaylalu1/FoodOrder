import React, { useContext, useState } from "react";
import classes from "./addmeal.module.css";
import mealData from "../Cart/addedmealdata/addedMealData";
import totalMeal from "../Cart/addedmealdata/totalmeal";

const AddMeal = (props) => {
  const [amount, setAmount] = useState(1);
  const meals = useContext(mealData);
  const total = useContext(totalMeal);
  return (
    <form
      className={classes.addmeal}
      id={props.id}
      onSubmit={(e) => {
        e.preventDefault();
        meals.map((meal, index) => {
          return props.id === index ? (meal.amount += Number(amount)) : "";
        });

        total.changeTotal(amount);
      }}
    >
      <h2>Amount</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          const newAmount = e.target.value;
          setAmount(newAmount);
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default AddMeal;
