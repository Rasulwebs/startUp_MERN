import React from 'react';
import "./Register.scss"
const Register = () => {
    return (
      <>
        <div className="reg-container">
                <div className="reg-container_register">
                    <h2 className='text-center text-white'>REGISTER</h2>
            <input type="text" placeholder="Enter you name" />
            <input type="email" placeholder="Enter you email" />
            <input type="password" placeholder="Enter you password" />
                    <input type="phone" placeholder="Enter you phone    " />
                    <button>Send</button>
          </div>
        </div>
      </>
    );
};

export default Register;