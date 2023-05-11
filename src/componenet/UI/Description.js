import React from "react";
import classes from "./description.module.css";

const Description = () => {
  return (
    <div className={classes.description}>
      <h1>Delicious Food Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
        <span>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </span>
      </p>
    </div>
  );
};

export default Description;
