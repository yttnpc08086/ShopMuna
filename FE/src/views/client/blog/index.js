import React from 'react';
import { Route, Routes } from "react-router-dom";
import Blog from "../../../components/client/blog/blog";
import BlogDetails from "../../../components/client/blog/blog-details";

const BlogViews = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Blog />} />
        <Route path={"/detail"} element={<BlogDetails />} />
      </Routes>
    </div>
  )
};  

export default BlogViews;
