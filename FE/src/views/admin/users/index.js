import React from "react";
import Users from "../../../components/admin/users/index";
import { Route, Routes } from "react-router-dom";

const UsersViews = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Users />} />
      </Routes>
    </div>
  );
};
export default UsersViews;
