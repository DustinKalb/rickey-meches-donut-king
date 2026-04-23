"use client";
import "./NavBar.css";
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="navbar-transparent">
      <Container>
        <Nav className="mx-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#hoursandlocation">Hours & Location</Nav.Link>
            <Nav.Link href="#order">Order</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;