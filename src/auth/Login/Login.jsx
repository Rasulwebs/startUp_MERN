import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import "./Login.scss"
const Login = () => {
    return (
      <>
        <div className="log-container">
          <div className="log-container_login">
            <h2 className="text-center text-white">LOGIN</h2>
            <Input type="email" placeholder="Enter you email" />
            <Input type="password" placeholder="Enter you password" />
            <Link to="update">
              <a href="#">Forgot password</a>
            </Link>
            <button>Send</button>
          </div>
        </div>
      </>
    );
};

export default Login;