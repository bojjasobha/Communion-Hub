import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container variant="blue">
        <Navbar.Brand as={Link} to="/" className="text-light">
        <img
            src="/images/image2.png" 
            alt="logo"
            width="40"  
            height="40" 
            className="me-2 rounded-circle"
          />Connecting People Across Faiths & Interests</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/events" className="text-light">Events</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
