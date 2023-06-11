import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./forgotPasswordStyle.scss"
const ConfirmNewPassword = () => {
  const [verifCode, setverifCode] = useState("");
  const [newPass, setNewPass] = useState("");
  return (
    <>
      <Layout>
        <div className="container">
          <div className="formWrapp">
          <h2 className="text-center text-white mb-4">Verify and New Password</h2>

            <input type="text" required className="form-control bg-transparent" placeholder="Enter verification code" />
            <input type="text" required className="form-control bg-transparent" placeholder="Enter New Password " />
            <button className="btn py-3 btn-success w-100 mt-3">SEND</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmNewPassword;
