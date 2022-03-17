import React from "react";
import { Container, Card } from "react-bootstrap";
import "../Styles/Experience.css";
import Own from "./images/3own.png";
import Sales from "./images/Salesforce.png";
export default function Experience() {
  return (
    <div className="Experience" id="Exp">
      <h2>Experience</h2>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img src={Own} className="card-img-top" alt="..."></img>
                <h5 className="card-title">WordPress Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Working with{" "}
                  <a
                    href="https://www.digitizemedia.ca/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Digitize Media
                  </a>{" "}
                  We build and maintain websites for small and medium
                  businesses. While collaborating with their team, I learned
                  valuable lessons, but I quickly realised that working with
                  them was not going to help me achieve my goal of becoming a
                  software developer because they only work with paid themes and
                  drag and build programmes like Elementor. I'm still in contact
                  with them and helping with different projects but my main
                  focus now is to learn React.js.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img src={Sales} className="card-img-top" alt="..."></img>
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
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
                </p>{" "}
                <p>
                  Learning new skills on the job and adapting to different
                  circumstances and technologies to create a tool that solves
                  problems for clients. It's an awesome feeling that I want to
                  pursue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
