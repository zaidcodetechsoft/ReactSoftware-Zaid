import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./UserLogin.css";
import CTSLogo from "../../assets/images/ctslogocut.png"
// import Logo from "../../assets/images/logo.png";

function UserProfile2() {
  return (
    <>
    <main className="main_user2">
      <div className="login_form1  ">
      <Alert className="text-center fs-4 m-0   alertt">
            <img src= {CTSLogo} alt="" />
          </Alert>
        <Form className="form py-3 px-4 ">

          <div className="mt-2 mb-5">
          
          <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-2 " controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </div>
            <Button className="form_btn mt-2 w-100" type="submit">
            <NavLink to="/view">
            Log In
            </NavLink>        
          </Button>
          <div className="message text-center mt-4">
          <p>
            Forgot Password? <NavLink to="/user3" className="mx-2">
            Click Here
            </NavLink>
          </p>
          </div>
        </Form>
        {/* <img src={Logo} alt="" /> */}
        {/* <form className="register-form">
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
        </form> */}
      </div>
    </main>
    </>
  );
}

export default UserProfile2;
