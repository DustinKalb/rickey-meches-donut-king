"use client";
import "./NavBar.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" bg="transparent">
      <Container>
        <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Navbar.Text>|</Navbar.Text>
            <Nav.Link href="#about">About</Nav.Link>
            <Navbar.Text>|</Navbar.Text>
            <Nav.Link href="#order">Order</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;