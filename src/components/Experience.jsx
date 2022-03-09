import React from "react";
import { Container, Card } from "react-bootstrap";
import "../Styles/Experience.css";
import Own from './images/3own.png'
import Sales from "./images/Salesforce.png";
export default function Experience() {
  return (
    <div className="Experience">
      <h2>Experience</h2>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={Own} />
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
              help me achieve my goal of becoming a software developer because
              they only work with paid themes and drag and build programmes like
              Elementor. I'm still in contact with them and helping with
              different projects but my main focus now is to learn React.js.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={Sales} />
          <Card.Body>
            <Card.Title>Salesforce Developer</Card.Title>
            <Card.Text>
              <p>
                This job taught me what it takes to be a developer. Despite
                having no prior expertise with Salesforce, I was able to fix a
                major problem for
                <a
                  href="https://www.insuremontrose.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Insure Montrose
                </a>{" "}
                by simply reading the documentation and asking Google.
              </p>
              <p>
                Learning new skills on the job and adapting to different
                circumstances and technologies to create a tool that solves
                problems for clients. It's an awesome feeling that I want to
                pursue.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
