import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import "./Login.scss";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`https://startup01.onrender.com/api/users`, {
        email,
        password,
      });
      localStorage.getItem("email", res.data);
      localStorage.getItem("password", res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <Layout title={"Login Page"}>
        <div className="log-container">
          <div className="log-container_login">
            <h2 className="text-center text-white">LOGIN</h2>
            <input
              className="form-control bg-transparent "
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent "
              type="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="mt-2 mb-3 text-end float-end">
              <Link to="/forgot-password" className="">
                Forgot password
              </Link>
            </span>
            <button
              className="btn btn-success loginBtn"
              onClick={() => {
                handleSubmit();
              }}>
              SEND
            </button>
            <span className="mt-2 mb-3 text-center text-info">
              <Link to={"/register"}>Or Register</Link>
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
