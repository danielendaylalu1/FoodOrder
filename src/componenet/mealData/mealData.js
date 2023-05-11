import React  from "react";

const mealData = React.createContext([
  {
    name: "sushi",
    description: "Finest Fish and Veggies",
    price: 22.99,
    amount: 0,
  },
  {
    name: "Shintze",
    description: "A Germen Speciality",
    price: 16.5,
    amount: 0,
  },
  {
    name: "Barbecue Burger",
    description: "American, Row, Meaty",
    price: 12.99,
    amount: 0,
  },
  {
    name: "Green Bowl",
    description: "Healthy...and Green...",
    price: 18.99,
    amount: 0,
  },
]);

export const MealDataManager = () => {
  return;
};

export default mealData;
