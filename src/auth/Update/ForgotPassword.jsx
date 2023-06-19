// import React from "react";
import "./forgotPasswordStyle.scss";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://startupwepapp.onrender.com";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState();
  const [value, setValue] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/api/users/forget`, {
        email: value.email,
      })
      .then((res) => {
        sessionStorage.setItem("confirmationCode", res.data.confirmationCode);
        sessionStorage.setItem("email", value.email);
        setSuccess(true);
      })
      .catch(({ name, message }) => console.log(name, message));
  };

  return (
    <>
      {success && navigate("/confitrm-new-password")}
      <Layout title={"Forgot password page"}>
        <div className="update-container">
          <form className="update" onSubmit={handleSubmit}>
            <h2 className="text-center text-white">UPDATE</h2>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="form-control bg-transparent"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              required
            />
            <button type={"submit"} className="btn btn-success mt-3 py-3">
              SEND
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
