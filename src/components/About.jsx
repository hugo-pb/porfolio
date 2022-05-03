import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../Styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function About() {
   useEffect(() => {
     AOS.init({ duration: 3000 });
   }, []);
  const [key, setKey] = useState("home");
  return (
    <div className="About">
      <h2 data-aos="zoom-in-up">About Me!</h2>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="home" title="Why coding?">
          <p>
            This is Hugo, a front-end developer with a passion for learning and
            problem-solving. I fell in love with coding while collaborating with
            programmers at the Watch Tower Bible and Tract Society of Canada,
            after which I decided to make it a career. I look forward to
            contributing to new solutions and growing in the industry
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
        <Tab eventKey="contact" title="Contact Me" className="title">
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
