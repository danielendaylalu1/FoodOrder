import React from "react";
import classes from "./home.module.css";
import Description from "./Description";
import Meal from "../Meal/Meal";

const Home = () => {
  return (
    <div className={classes.home}>
      <Description />
      <Meal />
    </div>
  );
};

export default Home;
