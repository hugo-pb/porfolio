import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../Styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function About() {
  const [key, setKey] = useState("home");
  return (
    <div className="About">
      <h2>About Me!</h2>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="home" title="Why coding?">
          <p>
            "Challenge accepted!" Since I was a little kid, I loved solving
            puzzles, thinking outside the box, and coming up with unique ideas,
            but I always said that computers were not my thing.
          </p>
          <p>
            I fell in love with coding while collaborating with programmers at
            the Watch Tower Bible and Tract Society after which I decided to
            make it a career. I began learning on MDN, Docs, and Google and
            creating projects to put what I was learning to use.
          </p>
        </Tab>
        <Tab eventKey="coding" title="When Im not coding? ">
          <p>When I'm not coding, I volunteer as a full-time Bible teacher.</p>
          <h4>Hobbies</h4>
          <ul>
            <li>Skateboarding</li>
            <li>Guitar</li>
            <li>Beat maker</li>
            <li>Reading</li>
          </ul>
        </Tab>
        <Tab eventKey="contact" title="Social Media" className="title">
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
        </Tab>
      </Tabs>
    </div>
  );
}
