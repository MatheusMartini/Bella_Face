import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Bella Face</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link exact to="/home">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/carrinho">Carrinho de compras</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavBar;
