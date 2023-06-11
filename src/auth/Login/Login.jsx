import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import "./Login.scss";
const Login = () => {
  return (
    <>
      <Layout title={"Login page"}>
        <div className="log-container">
          <div className="log-container_login">
            <h2 className="text-center text-white">LOGIN</h2>
            <input
              className="form-control bg-transparent "
              type="email"
              placeholder="Enter you email"
            />
            <input
              className="form-control bg-transparent "
              type="password"
              placeholder="Enter you password"
            />
            <span className="mt-2 mb-3 text-end float-end">
              <Link to="/forgot-password" className="">
                Forgot password
              </Link>
            </span>
            <button className="btn btn-success loginBtn">SEND</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
