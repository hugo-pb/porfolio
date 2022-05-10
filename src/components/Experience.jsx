import React, {useEffect} from "react";
import Weather from "./images/WeatherAPP.png";
import Wedding from "./images/Weddingrsvp.png";
import Teampal from "./images/teampal.png";
import { Image } from "react-bootstrap";
import "../Styles/Experience.css";
import Own from "./images/3own.png";
import Sales from "./images/Salesforce.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarr from "./Navbarr";
export default function Experience() {
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  return (
    <div className="Experience" id="Exp">
      <Navbarr />
      <h2 data-aos="zoom-out-down">Experience</h2>
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-md-6">
            <div className="card" data-aos="flip-left">
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
            <div className="card" data-aos="flip-right">
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
        <h2> Personal Proyects</h2>
        <div className="row">
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
                But everyone makes a weather app... Yeah! but the idea is to
                make it unique because it's a wonderful approach to learn how to
                fetch data from an API.
              </p>
              <p data-aos="fade-left">
                Just weather is... well just weather, using OpenWeather API,
                hosting it with netlify, and using a cool interactive background
                to give it a diferent feel, the user can look up any city in the
                word and look at the current weather and weekly forecast.
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
              <h3 data-aos="fade-left">Wedding invitation / RSVP Form</h3>{" "}
              <br />
              <p data-aos="fade-left">
                <em> First Team project, responsive design, mapboxAPI </em>
              </p>
              <p data-aos="fade-left">
                A family project that thougt me how to work as a team, adapting
                to different codding styles. This project is really special for
                me because it was the invitation and rsvp page for my own
                wedding. (sorry code is not avialible)
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
                Side hustle website created with pure html-css-js that promote
                our ideas and services to busines. We have been able to help a
                number of a few different businesses, providing valuable online
                tools.
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
        </div>
      </div>
    </div>
  );
}
