
import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import "../Styles/Projects.css";
import Weather from "./images/WeatherAPP.png";
import Wedding from "./images/Weddingrsvp.png"
export default function Projects() {
  return (
    <div className="Projects" id="Projects">
      <h2>Personal Projects</h2>{" "}
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Image
            src={Weather}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </Col>
        <Col>
          <h3>Weather APP</h3>
          <p>
            <small>First React.js Project </small>
          </p>
          <p>
            After learning state, props, components, and how powerful React is,
            I decided to build an app using all of the different things I was
            learning.
          </p>
          <p>
            Just weather is... well just weather, using OpenWeather API, hosting
            it with netlify, and using a cool interactive background to give it
            a diferent feel, the user can look up any city in the word and look
            at the current weather and weekly forecast.
          </p>
          <Button>Demo</Button> <Button>Code</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Weeding</h3>
          <p>
            <small>First Team Project </small>
          </p>
          <p>
            After learning state, props, components, and how powerful React is,
            I decided to build an app using all of the different things I was
            learning.
          </p>
          <p>
            Just weather is... well just weather, using OpenWeather API, hosting
            it with netlify, and using a cool interactive background to give it
            a diferent feel, the user can look up any city in the word and look
            at the current weather and weekly forecast.
          </p>
          <Button>Demo</Button> <Button>Code</Button>
        </Col>{" "}
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Image
            src={Wedding}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Image
            src={Weather}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </Col>
        <Col>
          <h3>Team Pal Designs</h3>
          <p>
            <small>First React.js Project </small>
          </p>
          <p>
            After learning state, props, components, and how powerful React is,
            I decided to build an app using all of the different things I was
            learning.
          </p>
          <p>
            Just weather is... well just weather, using OpenWeather API, hosting
            it with netlify, and using a cool interactive background to give it
            a diferent feel, the user can look up any city in the word and look
            at the current weather and weekly forecast.
          </p>
          <Button>Demo</Button> <Button>Code</Button>
        </Col>
      </Row>
    </div>
  );
}
