import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./forgotPasswordStyle.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://startupwepapp.onrender.com";

const ConfirmNewPassword = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState();
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmationCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/api/users/forget`, {
        email: sessionStorage.getItem("email"),
        password: value.password,
        confirmationCode:
          value.confirmationCode === sessionStorage.getItem("confirmationCode")
            ? setSuccess(true)
            : alert("The verification password is not correct!"),
      })
      .then((res) => {
        return res;
      })
      .catch(({ name, message }) => console.log(name, message));
  };

  return (
    <>
      {success && navigate("/")}
      <Layout>
        <div className="container">
          <div className="formWrapp">
            <h2 className="text-center text-white mb-4">
              Verify and New Password
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                className="form-control bg-transparent"
                placeholder="Enter verification code"
                onChange={(e) =>
                  setValue({ ...value, confirmationCode: e.target.value })
                }
                name="text"
                minLength="6"
              />
              <input
                type="password"
                required
                className="form-control bg-transparent"
                placeholder="Enter New Password "
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                name="password"
                minLength="6"
                maxLength="12"
              />
              <button className="btn py-3 btn-success w-100 mt-3">SEND</button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmNewPassword;
