import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  let navigate = useNavigate();
  const routeChangeLogin = () => {
    let path = `/log-in`;
    window.scrollTo(0, 0);
    navigate(path);
  };
  return (
    <>
      <div className="sign-up wrapper-sign-up container">
        <div className="form-sign-up">
          <div className="text-center">
            <div className="content-aut">
              <span>
                <img
                  src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62ae19a7502a08dbb552a015_password-writelogy-brix-templates.svg"
                  alt=""
                />
              </span>
              <h1>Sign up</h1>
            </div>
            <p>
              Sit porttitor potenti nisl proin penatibus velit etiam ac com
              faucibus nunc eu quis integer quis egesta.
            </p>
            <div className="input-sign-up">
              <input type="text" placeholder="Enter your email address" />
              <input type="text" placeholder="Enter your name" />
              <input type="password" placeholder="Enter your password" />
            </div>
            <button>Sign Up</button>
            <p className="mt-3 account">
              Already have an account?{" "}
              <u onClick={() => routeChangeLogin()}>Log in</u>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
