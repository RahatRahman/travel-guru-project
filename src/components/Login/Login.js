import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import FbIcon from "../../Icon/fb.png";
import GoogleIcon from "../../Icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  /**========================= Google SignIn Start ====================================*/
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email: email, photo: photoURL, isSignedIn: true };
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(signedInUser, result);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  /**========================= Google SignIn Ends ====================================*/
  /**========================= Facebook SignIn Starts ====================================*/
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleFbSignIn = (e) => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email: email, photo: photoURL, isSignedIn: true };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
    e.preventDefault();
  };
  /**========================= Facebook SignIn Ends ====================================*/
  /**========================= handleBlur Starts ====================================*/
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  /**========================= handleBlur Ends ====================================*/

  /**========================= handleSubmit Starts ====================================*/
  const handleSubmit = (e) => {
    if (newUser && user.name && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const { displayName, email } = res.user;
          const signedInUser = {
            name: user.name,
            email: email,
            isSignedIn: true,
          };
          setLoggedInUser(signedInUser);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          verifyEmail();
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          const { displayName, email } = res.user;
          const signedInUser = {
            name: displayName,
            email: email,
            isSignedIn: true,
          };
          setLoggedInUser(signedInUser);
          history.replace(from);
          console.log("sign in user info", res.user);
        })
        .catch(function (error) {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  /**========================= handleSubmit Ends ====================================*/

  /**========================= updateUserName Starts ====================================*/
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("user name updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**========================= updateUserName Ends ====================================*/

  /**========================= verifyEmail Starts ====================================*/
  const verifyEmail = () => {
    var user = firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  /**========================= verifyEmail Starts ====================================*/

  return (
    <div className="login">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h3>{newUser ? "Create an account" : "Login"}</h3>
        <br />
        <Form.Group controlId="formBasicEmail">
          {newUser && <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Your Name" required />}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="warning" type="submit" size="large" block>
          {newUser ? "Create an account" : "Login"}
        </Button>
        <small className="text-danger">{user.error}</small>
        {user.success && <small className="text-success">User {newUser ? "Created" : "Logged In"} Successfully</small>}
        <p className="text-dark">
          {newUser ? "Already have an account?" : "Don’t have an account?"}
          <span style={{ cursor: "pointer" }} className="text-warning" onClick={() => setNewUser(!newUser)}>
            {newUser ? "login" : "Create an account"}
          </span>
        </p>

        <div className="login-bottom">
          <Button onClick={handleFbSignIn} variant="light" size="large" block>
            <img src={FbIcon} alt="" />
            Continue with Facebook
          </Button>
          <Button onClick={handleGoogleSignIn} variant="light" size="large" block>
            <img src={GoogleIcon} alt="" />
            Continue with Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
