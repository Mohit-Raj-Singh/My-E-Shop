import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ProductPage } from "./ProductPage";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path='/single/:id' element={<Home />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};
