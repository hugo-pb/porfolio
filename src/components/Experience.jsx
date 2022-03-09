import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../Styles/Experience.css";
export default function Experience() {
  return (
    <div className="Experience">
      <h2>Experience</h2>
      <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>WordPress Developer</Card.Title>
              <Card.Text>
                Working with{" "}
                <a
                  href="https://www.digitizemedia.ca/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Digitize Media
                </a>{" "}
                We build and maintain websites for small and medium businesses.
                While collaborating with their team, I learned valuable lessons,
                but I quickly realised that working with them was not going to
                help me achieve my goal of becoming a software developer because
                they only work with paid themes and drag and build programmes
                like Elementor.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
