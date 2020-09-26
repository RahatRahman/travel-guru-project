import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import FbIcon from "../../Icon/fb.png";
import GoogleIcon from "../../Icon/google.png";

const Login = () => {
  return (
    <div className="login">
      <Form className="login-form">
        <h3>Create an account</h3>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="warning" type="submit" size="large" block>
          Create an account
        </Button>
        <p className="text-dark">
          Already have an account? <span className="text-warning">login</span>
        </p>

        <div className="login-bottom">
          <Button variant="light" size="large" block>
            <img src={FbIcon} alt="" />
            Continue with Facebook
          </Button>
          <Button variant="light" size="large" block>
            <img src={GoogleIcon} alt="" fluid />
            Continue with Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
