import React from "react";
import "./forgotPasswordStyle.scss";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate =useNavigate()
  function handlersubmit(e) {
    e.preventDefault();
    navigate("/confitrm-new-password")
  }
  return (
    <>
      <Layout title={"Forgot password page"}>
        <div className="update-container">
          <form className="update" onSubmit={handlersubmit}>
            <h2 className="text-center text-white">UPDATE</h2>
            <input type="email" placeholder="Enter you email" />

           
            <button type={"submit"} className="btn btn-success mt-3 py-3" >SEND</button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
