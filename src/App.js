import React, { useContext } from "react";
import Header from "./componenet/UI/Header";
import Home from "./componenet/UI/Home";
import Modal from "./componenet/Cart/cartPopup/Modal";
import CartCtx from "./componenet/Cart/CartCtx";
import { AddedMealDataManager } from "./componenet/Cart/addedmealdata/totalmeal";

const App = () => {
  const ctx = useContext(CartCtx);
  return (
    <AddedMealDataManager>
      <Header />
      <Home />
      {ctx.isClicked ? <Modal /> : ""}
    </AddedMealDataManager>
  );
};

export default App;
