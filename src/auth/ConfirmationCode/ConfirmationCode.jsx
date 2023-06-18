import React, { useState , useContext, memo } from "react";
import Layout from "../../components/Layout/Layout";
import AuthCode from "react-auth-code-input"
import "./styleConfirmCode.scss"
import Input from "../../components/Input/Input";
import context from "../../context/context";
import { useNavigate } from "react-router-dom";
import { API } from "../../API/API";
const ConfirmationCode = memo(() => {
      const [code, setCode] = useState("");
  const { setRegister, register } = useContext(context);
  const navigate = useNavigate();
    async function handlerSubmit(e) {
      e.preventDefault();
      register.confirmationCode = code;
      setRegister({ ...register });
      console.log(register);
      let { success, token } = await API.postData(register);
      console.log(register);
      localStorage.setItem("token", token);
      if (success) {
        navigate("/");
      }
    }
  return (
    <>
      <Layout title={"Confirmation Code Page"}>
        <div className="container">
          <div className="heightWrapp mx-auto">
            <div className="confirmInputsWrapp mx-auto">
              <form onSubmit={handlerSubmit}>
                <Input setValue={setCode} className="bg-dark" />
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
});

export default ConfirmationCode;
