import React, { useState, useEffect } from "react";
import Navbarr from './Navbarr'
import "../Styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import me from "./images/me.jpg";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="About ">
      <div className="container">
        <div className="row">
          <Navbarr />
          <div className="col-md-6">
            <h2 data-aos="zoom-in-up">About Me!</h2>

            <p>
              This is Hugo, a software developer with a passion for learning and
              problem-solving. I fell in love with coding while collaborating
              with programmers at the Watch Tower Bible and Tract Society of
              Canada, after which I decided to make it a career. I look forward
              to contributing to new solutions and growing in the industry
            </p>

            <p>
              When I'm not coding, I volunteer as a full-time Bible teacher.
            </p>
            <h4>Hobbies</h4>
            <ul>
              <li>Skateboarding</li>
              <li>Guitar</li>
              <li>Beat maker</li>
              <li>Reading</li>
            </ul>

            <div className="icons">
              <a
                href="https://github.com/hugo-pb"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faGithub} className="ic" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/hugo-palomera-066610215/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedin} className="ic" />
              </a>
              <a
                href="https://www.instagram.com/hugoefrenpb/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} className="ic" />
              </a>{" "}
            </div>
          </div>
          <div className="col-md-6">
            <img src={me} alt="me" className="me2" />
          </div>
        </div>
      </div>
    </div>
  );
}
