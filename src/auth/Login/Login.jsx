import React from 'react';
import "./Login.scss"
const Login = () => {
    return (
      <>
        <div className="log-container">
          <div className="log-container_login">
            <h2 className="text-center text-white">LOGIN</h2>
            <input type="email" placeholder="Enter you email" />
                    <input type="password" placeholder="Enter you password" />
                    <a href="#">Forgot password</a>
            <button>Send</button>
          </div>
        </div>
      </>
    );
};

export default Login;