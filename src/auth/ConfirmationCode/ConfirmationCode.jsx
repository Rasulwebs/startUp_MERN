/* eslint-disable react/display-name */
import { useState, useContext, memo } from "react";
import Layout from "../../components/Layout/Layout";
import "./styleConfirmCode.scss";
import Input from "../../components/Input/Input";
import context from "../../context/context";
import { useNavigate } from "react-router-dom";
import { API } from "../../API/API";
import { toast } from "react-hot-toast";
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
      toast.success("Register Successfully");
      navigate("/");
    }else{
      toast.error("Failed in Register");
    }
  }
  return (
    <>
      <Layout title={"Confirmation Code Page"}>
        <div className="container">
          <div className="heightWrapp mx-auto">
            <div className="confirmInputsWrapp mx-auto">
              <form onSubmit={handlerSubmit} className="confirmCodeFrom w-100">
                <Input setValue={setCode} className="bg-transparent" />
                <div className="confirmInputsWrapp mb-5">
                </div>
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
