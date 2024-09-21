import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../../../components/client/about/about";

const AboutViews = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<About />} />
      </Routes>
    </div>
  )
};  

export default AboutViews;
