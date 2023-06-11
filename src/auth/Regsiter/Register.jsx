import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
const Register = () => {
  const [email, setEamil] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const handleChange = async () => {
    const { data } = await axios.post(
      `https://startup01.onrender.com/api/users`,{
        
      }
    );
  };
  return (
    <>
      <Layout title={"Register Page"}>
        <div className="reg-container">
          <div className="reg-container_register">
            <h2 className="text-center text-white">REGISTER</h2>
            <input
              className="form-control bg-transparent"
              type="text"
              placeholder="Enter you name"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => {
                setEamil(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="password"
              placeholder="Enter you password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="phone"
              placeholder="Enter you phone    "
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <button
              className="registerBtn mt-3 btn btn-success"
              onClick={() => {
                handleChange()
                navigate("/confirm-auth")
              }}
            >
              SEND
            </button>
            <span className="mt-2 mb-3 text-center text-info">
              <Link to={"/login"}>Or Login</Link>
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
