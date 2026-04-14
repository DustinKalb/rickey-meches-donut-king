"use client";
import "./NavBar.css";
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" bg="transparent" className="navbar-transparent">
      <Container>
        <Nav className="mx-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Navbar.Text>|</Navbar.Text>
            <Nav.Link href="#hoursandlocation">Hours & Location</Nav.Link>
            <Navbar.Text>|</Navbar.Text>
            <Nav.Link href="#order">Order</Nav.Link>
            <Navbar.Text>|</Navbar.Text>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;