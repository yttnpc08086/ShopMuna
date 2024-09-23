import React from 'react';
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "../../../components/client/cart/shopping-cart";


const CartViews = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ShoppingCart />} />
      </Routes>
    </div>
  )
};  

export default CartViews;
