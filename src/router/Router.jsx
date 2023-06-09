/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login/Login";
import Register from "../auth/Regsiter/Register";
import Update from "../auth/Update/Update";
import ProductAddPage from "../components/addProdeuct/AddProdeuct.jsx";
import Home from "../pages/Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/update" element={<Update />} />
        <Route path="/dashboard" element={<ProductAddPage />} />
      </Routes>
    </>
  );
};

export default Router;
