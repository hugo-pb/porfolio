import React from 'react'
import "../Styles/Navbarr.css"
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
export default function Navbarr() {
    return (
      <div className="Navbarr">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="#home">Hugo Palomera</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Exp">Experience</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Button className="btn" variant="outline-light">
                  Hire Me!
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
