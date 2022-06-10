import React from "react";
import "./UserProfile2.css";
import Logo from "../../assets/logo.png";

function UserProfile2() {
  return (
    <div className="login-page">
      <div className="form">
        <img src={Logo} alt="" />
        <h2 className="login_sec">LOGIN</h2>
        <form className="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p className="message">
            Forgot Password? <a href="#">Click Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserProfile2;
