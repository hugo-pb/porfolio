import React from "react";
import { Col, Image } from "react-bootstrap";
import "../Styles/Projects.css";
import Weather from "./images/WeatherAPP.png";
import Wedding from "./images/Weddingrsvp.png";
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
        <div className="col-md-6 project ">
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
      <hr />
      <div className="row wedding">
        <div className="col-md-6  ">
          <Image
            src={Wedding}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </div>
        <div className="col-md-6 project ">
          <h3>Wedding </h3>
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
        </div>
      </div>
      <hr />
      <div className="row team">
        <div className="col-md-6  ">
          <Image
            src={Teampal}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </div>
        <div className="col-md-6 project ">
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
        </div>
      </div>
      <hr />
    </div>
  );
}
