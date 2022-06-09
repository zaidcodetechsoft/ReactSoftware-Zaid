import React from "react";
// import view from "../UserProfile/UserProfile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Alert, Button } from "react-bootstrap";
// import { Container } from "react-bootstrap";
import "./UserProfile.css";
// import {AiOutlineUser, RiLockPasswordFill} from "react-icons"
import { PersonCircleOutline, AppsOutline } from "react-ionicons";
import Logo from "../../assets/logo.png"
// import "./index.css"

function UserProfile() {
  return (
    <div className="row">
      <div className="col">
        <div className="form_section">
          <Alert className="alert_sec text-center fs-10 fw-bold w-100">
            <h1 className="line_text"><img className="img_login" src= {Logo} alt="" /> <p className="p_login">LOGIN</p> </h1>
          </Alert>
          <Form className="form py-3 px-3">
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label className="form_label">
                <PersonCircleOutline
                  color={"#00000"}
                  height="20px"
                  width="20px"
                />
                 UserID
              </Form.Label>
              <Form.Control
                className="form_label"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form_label">
                <AppsOutline color={"#00000"} height="20px" width="20px" />
                Password
              </Form.Label>
              <Form.Control
                className="form_label"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="button_form mb-1"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
