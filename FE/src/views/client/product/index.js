import React from 'react';
import Product from "../../../components/client/product/products";
import ProductDetails from "../../../components/client/product/product-details";
import { Route, Routes } from "react-router-dom";

const ProductViews = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Product />} />
        <Route path={"/details"} element={<ProductDetails />} />
      </Routes>
    </div>
  )
};  

export default ProductViews;
