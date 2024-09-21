import React from "react";
import {Route, Routes } from "react-router-dom";
import Header from "../views/@theme/client/header";
import Footer from "../views/@theme/client/footer";
import Home from "../components/client/home";
import Product from "../views/client/product/index.js";
import PageNotFound from "../views/client/404/index.js";
import ShoppingCart from "../views/client/cart/index.js";
import Contact from "../views/client/contact/index.js";
import Blog from "../views/client/blog/index.js";
import About from "../views/client/about/index.js";
// import Product from "../components/client/product/products.js";
// import ProductDetails from "../components/client/product/product-details.js";
import "../assets/client/css/main.css";
import "../assets/client/css/util.css";
import "../assets/client/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/client/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../assets/client/fonts/iconic/css/material-design-iconic-font.min.css";
import "../assets/client/fonts/linearicons-v1.0.0/icon-font.min.css";
import "../assets/client/vendor/animate/animate.css";
import "../assets/client/vendor/css-hamburgers/hamburgers.min.css";
import "../assets/client/vendor/animsition/css/animsition.min.css";
import "../assets/client/vendor/select2/select2.min.css";
import "../assets/client/vendor/daterangepicker/daterangepicker.css";
import "../assets/client/vendor/slick/slick.css";
import "../assets/client/vendor/MagnificPopup/magnific-popup.css";
import "../assets/client/vendor/perfect-scrollbar/perfect-scrollbar.css";
import "../assets/client/vendor/daterangepicker/moment.min.js";
import "../assets/client/vendor/daterangepicker/daterangepicker.js";
// import "../assets/client/js/main.js";
// import "../assets/client/vendor/slick/slick.min.js";
// import "../assets/client/vendor/parallax100/parallax100.js";
// import "../assets/client/vendor/parallax100/parallax100.js";



const ClientRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Product />} />
          <Route path="/cart/*" element={<ShoppingCart />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/about/*" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </>
      </Routes>
      <Footer />
    </>
  );
};

export default ClientRoutes;
