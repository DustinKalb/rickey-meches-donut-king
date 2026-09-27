"use client";
import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="transparent"
      className={`navbar-transparent ${isScrolled ? "navbar-scrolled" : ""}`}
    >
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
