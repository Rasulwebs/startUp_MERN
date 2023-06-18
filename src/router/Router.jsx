/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login/Login";
import Register from "../auth/Regsiter/Register";
import ForgotPassword from "../auth/Update/ForgotPassword";
import ProductAddPage from "../components/addProdeuct/AddProdeuct.jsx";
import Home from "../pages/Home";
import ConfirmationCode from "../auth/ConfirmationCode/ConfirmationCode";
import ConfirmNewPassword from "../auth/Update/ConfirmNewPassword";
import Responsive from "../components/Responsive/Responsive";
import Responsives from "../components/Responsive/Responsives";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-auth" element={<ConfirmationCode />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-product" element={<ProductAddPage />} />
        <Route path="/confitrm-new-password" element={<ConfirmNewPassword />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/responsives" element={<Responsives />} />
      </Routes>
    </>
  );
};

export default Router;
