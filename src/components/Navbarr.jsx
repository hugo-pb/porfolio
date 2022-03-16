import React from 'react'
import "../Styles/Navbarr.css"
import Me from "./images/hugo-compu.png";
import { Nav, Navbar, Container, Button,Image } from 'react-bootstrap';
export default function Navbarr() {
    return (
      <div className="Navbarr">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <Image src={Me} style={{
              height: '50px',
            marginRight:"100px"}} />
            <Navbar.Brand href="#home">Hugo Palomera</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Exp">Experience</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Button className="btn" variant="outline-light">
                  Contact Me!
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
