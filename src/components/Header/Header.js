import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Image/Logo.png";
import "./Header.css";

const Header = () => {
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
            <Nav.Link href="/" className="mr-4 text-white">
              News
            </Nav.Link>
            <Nav.Link href="/" className="mr-4 text-white">
              Destination
            </Nav.Link>
            <Nav.Link href="/" className="mr-4 text-white">
              Blog
            </Nav.Link>
            <Nav.Link href="/" className="mr-4 text-white">
              Contact
            </Nav.Link>
            <Link to="/login">
              <Button variant="warning">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
