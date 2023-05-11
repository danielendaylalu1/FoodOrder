import React, { useContext } from "react";
import classes from "./mealmodal.module.css";
import AddedMeal from "./AddedMeal";
import mealData from "../addedmealdata/addedMealData";
import CartCtx from "../CartCtx";
import totalMeal from "../addedmealdata/totalmeal";

const MealModal = () => {
  const meals = useContext(mealData);
  const ctx = useContext(CartCtx)
  const total = useContext(totalMeal)
  const totalPrice = meals.map((meal)=>{
    return meal.amount > 0 ? meal.price*meal.amount:''
  })
  return (
    <ul className={classes.mealmodal}>
      {meals.map((meal, index) => {
        return <>{meal.amount > 0 && total.total>0? <AddedMeal meal={meal} id={index}/> : ""}</>;
      })}
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <h3>${totalPrice.reduce((total, next)=>{return Math.round(total + next)})}</h3>
      </div>
      <div className={classes.btns}>
        <button type="button" className={classes.btnOutline} onClick={()=>{ctx.hide()}}>Close</button>
        <button type="button" className={classes.btnFill} onClick={()=>{ctx.hide() }}>Order</button>
      </div>
    </ul>
  );
};

export default MealModal;
