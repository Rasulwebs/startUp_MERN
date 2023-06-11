import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

import "./Register.scss";
const Register = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEamil] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  const navigate = useNavigate();

  const postDetails = (pics) => {
    setLoading(true);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "roadsidecoder");
      fetch("https://api.cloudinary.com/v1_1/roadsidecoder/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageLink(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  const handleChange = async () => {
    const { data } = await axios.post(
      `https://startup01.onrender.com/api/users`,
      { username, email, password, imageLink, portfolioLink }
    );
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("imageLink", JSON.stringify(imageLink));
    localStorage.setItem("portfolioLink", JSON.stringify(portfolioLink));
    console.log(data);
  };
  return (
    <>
      <Layout title={"Register Page"}>
        <div className="reg-container">
          <div className="reg-container_register">
            <h2 className="text-center text-white">REGISTER</h2>
            <input
              className="form-control bg-transparent"
              type="file"
              accept="image/*"
              onChange={(e) => {
                postDetails(e.target.files[0]);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="text"
              placeholder="Enter you name"
              value={username}
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="email"
              placeholder="Enter you email"
              value={email}
              required
              onChange={(e) => {
                setEamil(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="password"
              placeholder="Enter you password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="form-control bg-transparent"
              type="password"
              placeholder="Enter you Portfolio Link"
              value={portfolioLink}
              onChange={(e) => {
                setPortfolioLink(e.target.value);
              }}
            />

            <button
              className="registerBtn mt-3 btn btn-success"
              onClick={() => {
                handleChange();
                navigate("/confirm-auth");
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
