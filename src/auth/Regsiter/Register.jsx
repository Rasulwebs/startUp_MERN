import React, { useState , useContext } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import context from "../../context/context"
import "./Register.scss";
import { API } from "../../API/API";
const Register = () => {
  const { register, setRegister } = useContext(context);
  const [loading, setLoading] = useState(true);
  const [email, setEamil] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  const navigate = useNavigate();

  const postDetails = (pics) => {
    setLoading(true);
    if (pics.type === "images/jpeg" || pics.type === "image/png") {
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

  async function handlerSubmit(e) {
    e.preventDefault();
    let formData = {
      username,
      email,
      password,
      portfolioLink,
      imageLink,
    };
    // console.log(formData);
    setRegister({ ...formData });
    let { success, confirmationCode } = await API.postData(formData);
    // console.log(register);
    console.log(confirmationCode);
    console.log(success);
    if (success) {
      navigate("/confirm-auth");
    }
  }

  return (
    <>
      <Layout title={"Register Page"}>
        <div className="reg-container_register">
          <h2 className="text-center text-white">REGISTER</h2>
          <form action="#" onSubmit={handlerSubmit}>

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
              type="text"
              value={portfolioLink}
              placeholder="Enter you Portfolio Link"
              onChange={(e) => {
                setPortfolioLink(e.target.value);
              }}
            />

            <button className="registerBtn mt-3 btn btn-success">SEND</button>
            <span className="mt-2 mb-3 text-center text-info">
              <Link to={"/login"}>Or Login</Link>
            </span>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;