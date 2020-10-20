import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <NavDropdown title="States" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/state/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/state/2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/state/3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contacts/view">View Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavBar;
