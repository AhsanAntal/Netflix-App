import "./login.scss";
import logo from "../Register/netflix.png";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="netflix logo" />
          <button className="log-button">Sign in</button>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Sign in</button>
          <span>
            {" "}
            New to Netflix? <b>Sign up Now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <b> Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
}
