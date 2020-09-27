import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../Image/Logo.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="header">
      <Navbar expand="lg" className="header-navbar">
        <Link to="/home" className="ml-3">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Nav.Link className="mr-2 text-white">News</Nav.Link>
            <Nav.Link className="mr-2 text-white">Destination</Nav.Link>
            <Nav.Link className="mr-2 text-white">Blog</Nav.Link>
            <Nav.Link className="mr-2 text-white">Contact</Nav.Link>
            {loggedInUser.isSignedIn && (
              <Nav.Link className="text-warning">{loggedInUser.name || loggedInUser.email}</Nav.Link>
            )}

            <Link to="/login">
              {loggedInUser.isSignedIn ? (
                <Button variant="warning" onClick={() => setLoggedInUser({})}>
                  Logout
                </Button>
              ) : (
                <Button variant="warning">Login</Button>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
