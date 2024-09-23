import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "../../../components/client/auth/login.js";
import Register from "../../../components/client/auth/register.js";
// import ForgotPass from "../../../components/client/blog/blog-details";
// import ChangePass from "../../../components/client/blog/blog-details";


const AuthViews = () => {
  return (
    <div>
       <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </div>
  )
};

export default AuthViews;
