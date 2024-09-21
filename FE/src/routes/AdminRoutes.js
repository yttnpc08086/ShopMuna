import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/@theme/admin/home";
import Header from "../views/@theme/admin/header";
import Menu from "../views/@theme/admin/menu";
import Footer from "../views/@theme/admin/footer";
import UsersViews from "../views/admin/users/index";
import "../assets/admin/css/style.css";
import "../assets/admin/js/";

const AdminRoutes = () => {
  return (
    <>
      <div className="container-admin">
        <Menu />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<UsersViews />} />
          </>
        </Routes>
        <Header />
        <Footer />
      </div>
    </>
  );
};

export default AdminRoutes;
