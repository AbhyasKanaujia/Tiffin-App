import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="light" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Tiffin App
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="navbar"
        />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/search" onClick={() => setExpanded(false)}>
              Search
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" onClick={() => setExpanded(false)}>
              Signup
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={`Abhyas Kumar Kanaujia`}>
              <NavDropdown.Item
                as={Link}
                to="/profile"
                onClick={() => setExpanded(false)}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/logout"
                onClick={() => setExpanded(false)}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
