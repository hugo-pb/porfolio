import React, {useEffect } from "react";
import { Image } from "react-bootstrap";
import "../Styles/Projects.css";
import Weather from "./images/WeatherAPP.png";
import Wedding from "./images/Weddingrsvp.png";
import Teampal from "./images/teampal.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
   useEffect(() => {
     AOS.init({ duration: 3000 });
   }, []);
  return (
    <div className="Projects" id="Projects">
      <h2 data-aos="zoom-in">Personal Projects</h2>{" "}
      <div className="row weather">
        <div className="col-md-6">
          <img
            data-aos="fade-right"
            src={Weather}
            alt="weatherapp"
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          />
        </div>
        <div className="col-md-6 project ">
          <h3 data-aos="fade-left">Just weather</h3>
          <p data-aos="fade-left">
            {" "}
            <em>react.js, bootstrap, particles.js and OpenWeatherAPI</em>
          </p>
          <p data-aos="fade-left">
            But everyone makes a weather app... Yeah! but the idea is to make it
            unique because it's a wonderful approach to learn how to fetch data
            from an API.
          </p>
          <p data-aos="fade-left">
            Just weather is... well just weather, using OpenWeather API, hosting
            it with netlify, and using a cool interactive background to give it
            a diferent feel, the user can look up any city in the word and look
            at the current weather and weekly forecast.
          </p>
          <a
            type="button"
            className="btn btn-outline-primary"
            href="https://reactjustweather.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            type="button"
            className="btn btn-outline-primary"
            href="https://github.com/hugo-pb/React-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
      <hr />
      <div className="row wedding">
        <div className="col-md-6  ">
          <Image
            data-aos="fade-right"
            src={Wedding}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </div>
        <div className="col-md-6 project ">
          <h3 data-aos="fade-left">Wedding invitation / RSVP Form</h3> <br />
          <p data-aos="fade-left">
            <em> First Team project, responsive design, mapboxAPI </em>
          </p>
          <p data-aos="fade-left">
            A family project that thougt me how to work as a team, adapting to
            different codding styles. This project is really special for me
            because it was the invitation and rsvp page for my own wedding.
            (sorry code is not avialible)
          </p>
          <a
            type="button"
            className="btn btn-outline-primary"
            href="https://hugojocelyn.com/rsvp.html"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <button type="button" class="btn btn-outline-primary" disabled>
            Code
          </button>
        </div>
      </div>
      <hr />
      <div className="row team">
        <div className="col-md-6  ">
          <Image
            data-aos="fade-right"
            src={Teampal}
            style={{
              height: "10rem",
              marginTop: "3rem",
            }}
          ></Image>
        </div>
        <div className="col-md-6 project ">
          <h3 data-aos="fade-left">Team Pal Designs</h3>

          <p data-aos="fade-left">
            Side hustle website created with pure html-css-js that promote our
            ideas and services to busines. We have been able to help a number of
            a few different businesses, providing valuable online tools.
          </p>
          <a
            type="button"
            className="btn btn-outline-primary"
            href="https://www.teampal.ca/"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            type="button"
            className="btn btn-outline-primary"
            href="https://github.com/hugo-pb/Teampal"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
      <h3>
        This porfolio{" "}
        <a
          href="https://github.com/hugo-pb/porfolio"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>{" "}
        is also on GitHub!
      </h3>
      <hr />
    </div>
  );
}
