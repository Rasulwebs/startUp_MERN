import React from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/Input/Input';
import "./Register.scss"
const Register = () => {
    return (
      <>
        <div className="reg-container">
          <div className="reg-container_register">
            <h2 className="text-center text-white">REGISTER</h2>
            {/* <input type="text" placeholder="Enter you name" /> */}
            <Input type="text" placeholder="Enter you name" />
            <Input type="email" placeholder="Enter you email" />
            <Input type="password" placeholder="Enter you password" />
            <Input type="phone" placeholder="Enter you phone" />
            <button>Send</button>
          </div>
        </div>
        x
      </>
    );
};

export default Register;