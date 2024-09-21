import React from 'react';
import { Route, Routes } from "react-router-dom";
import Contact from "../../../components/client/contact/contact";


const ContactViews = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Contact />} />
      </Routes>
    </div>
  )
};  

export default ContactViews;
