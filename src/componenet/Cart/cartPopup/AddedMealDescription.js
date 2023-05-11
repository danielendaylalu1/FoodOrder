import React from "react";
import classes from "./addedMealDesc.module.css"

const AddedMealDescription = (props)=>{
    return(
        <div className={classes.addedMealDesc}>
        <h1 className={classes.name}>{props.meal.name}</h1>
        <h2 className={classes.price}>${props.meal.price}</h2>
        <h3 className={classes.amount}>x{props.meal.amount}</h3>
      </div> 
    )
}

export default AddedMealDescription