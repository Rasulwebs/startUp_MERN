import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AuthCode from "react-auth-code-input"
import "./styleConfirmCode.scss"
const ConfirmationCode = () => {
  const [value, setValue] = useState("");
  const handleOnChange = (res) => {
    setValue(res);
  };
  console.log(value)
  return (
    <>
      <Layout title={"Confirmation Code Page"}>
        <div className="container">
       <div className="heightWrapp mx-auto">
       <div className="confirmInputsWrapp mx-auto">
        <AuthCode onChange={handleOnChange} className="authConfirmWrapp"/>
        </div>
       </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmationCode;
