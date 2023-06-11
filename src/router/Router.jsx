/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login/Login";
import Register from "../auth/Regsiter/Register";
import Home from "../pages/Home";
import ConfirmationCode from "../auth/ConfirmationCode/ConfirmationCode";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-auth" element={<ConfirmationCode />} />
      </Routes>
    </>
  );
};

export default Router;
