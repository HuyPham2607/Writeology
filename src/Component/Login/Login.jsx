import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  let navigate = useNavigate();
  const routeChangeSignUp = () => {
    let path = `/sign-up`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  return (
    <>
      <div className="login wrapper-login container">
        <div className="form-login">
          <div className="text-center">
            <div className="content-aut">
              <span>
                <img
                  src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62ae19a7502a08dbb552a015_password-writelogy-brix-templates.svg"
                  alt=""
                />
              </span>
              <h1>Log in to your account</h1>
            </div>
            <p>
              Sit porttitor potenti nisl proin penatibus velit etiam ac com
              faucibus nunc eu quis integer quis egesta.
            </p>
            <div className="input-login">
              <input type="text" placeholder="Enter your email address" />
              <input type="password" placeholder="Enter your password" />
            </div>
            <button>Log In</button>
            <div className="mt-4 forgot">
              <u>Forgot your password?</u>
            </div>
            <p className="mt-3 account">
              You don’t have an account?
              <u onClick={() => routeChangeSignUp()}>Sign Up</u>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
