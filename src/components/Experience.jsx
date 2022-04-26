import React from "react";
import { Container } from "react-bootstrap";
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

                <p className="card-text">
                  Working with{" "}
                  <a
                    href="https://www.digitizemedia.ca/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Digitize Media
                  </a>{" "}
                  We helped small and medium-sized enterprises by designing and
                  maintaining their websites. Our primary goal was to assist
                  businesses in growing by providing a professional website that
                  represents their authority in their field as well as marketing
                  techniques such as pay-per-click advertising.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img src={Sales} className="card-img-top" alt="..."></img>
                <h5 className="card-title">Salesforce Developer</h5>
                <p className="card-text">
                  Despite having no prior expertise with Salesforce, I was able
                  to fix a major problem for{" "}
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
