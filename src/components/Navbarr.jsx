import React from 'react'
import "../Styles/Navbarr.css"
import Me from "./images/hugo-compu.png";
import { Nav, Navbar, Container,Image } from 'react-bootstrap';

export default function Navbarr() {
    return (
      <div className="Navbarr">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <Image
              src={Me}
              style={{
                height: "50px",
              }}
            />
            <Navbar.Brand
              href="#home"
              style={{
                fontFamily: "Inspiration",
                fontSize: "2rem",
                marginRight: "5rem",
                marginLeft: "0.5rem",
              }}
            >
              Hugo Palomera
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Exp">Experience</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
          
                  <a
                    href="#Contact"
                    className="btn btn-outline-light"
                    type="button"
                    variant="outline-light"
                  style={{
                    marginTop: '0',
                  marginBottom: '0'
                  }}  
                >
                    Contact Me!
                  </a>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
