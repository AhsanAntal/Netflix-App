import React, { useRef, useState } from "react";
import "./register.scss";
import logo from "../Register/netflix.png";
import { ArrowForwardIos } from "@mui/icons-material";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handlePassword = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="netflix logo" />
          <button className="log-button">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies,TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="login-button" onClick={handleStart}>
              {" "}
              Get Started
            </button>
            <ArrowForwardIos className="arrow" />
          </div>
        ) : (
          <form className="input">
            <input type="Password" placeholder="Password" ref={passwordRef} />
            <button className="login-button" onClick={handlePassword}>
              {" "}
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
