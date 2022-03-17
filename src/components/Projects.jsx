
import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import "../Styles/Projects.css";
import Weather from "./images/WeatherAPP.png";
import Wedding from "./images/Weddingrsvp.png"
import Teampal from "./images/teampal.png";
export default function Projects() {
  return (
    <div className="Projects" id="Projects">
      <h2>Personal Projects</h2>{" "}
      <div className="row weather">
        <div className="col-md-6">
          <img
            src={Weather}
            alt="weatherapp"
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          />
        </div>
        <div className="col-md-6 ">
          <h3>Weather APP</h3>
          <p>
            <small>First React.js Project </small>
          </p>
          <p>
            Another Weather app? After learning state, props, components, and
            how powerful React is, I decided to build an app using all of the
            different things I was learning.
          </p>
          <p>
            Just weather is... well just weather, using OpenWeather API, hosting
            it with netlify, and using a cool interactive background to give it
            a diferent feel, the user can look up any city in the word and look
            at the current weather and weekly forecast.
          </p>
          <button type="button" class="btn btn-outline-primary">
            Demo
          </button>
          <button type="button" class="btn btn-outline-primary">
            Code
          </button>
        </div>
      </div>
     
      <div className="row wedding">
        <Col>
          <h3>Wedding</h3>
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
          <button type="button" class="btn btn-outline-primary">
            Demo
          </button>
          <button type="button" class="btn btn-outline-primary">
            Code
          </button>
        </Col>

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
      </div>
      <div className="row team">
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Image
            src={Teampal}
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
          <button type="button" class="btn btn-outline-primary">
            Demo
          </button>
          <button type="button" class="btn btn-outline-primary">
            Code
          </button>
        </Col>
      </div>
      <hr />
    </div>
  );
}
