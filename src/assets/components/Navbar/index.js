import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link exact to="/">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contacts">Contacts</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/state">States</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contacts/view">View contacts</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavBar;
