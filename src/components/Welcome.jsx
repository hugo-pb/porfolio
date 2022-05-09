import React, { useEffect } from "react";
import tunnel from "./images/tunnel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import me from './images/hugo-compu.png'
import { Link } from "react-router-dom";
import "../Styles/Welcome.css";
import { hover } from "@testing-library/user-event/dist/hover";
export default function Welcome() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="Welcome " id="Home">
      <div className="container">
        <div className="row">
          <div className="title">
            <p data-aos="fade-left">
              HUGO PALOMERA <img src={me} alt="me" className="me" />
              <br />
              SOFTWARE DEVELOPER
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="image">
        <Link to="Experience" style={{ color: "black" , }}>
          <p className="link">Experience</p>
          <img className="tunnel" src={tunnel} alt="tunnel" />
        </Link>
      </div>
      <div className="image-2">
        <Link to="about" style={{ color:"black", }}>
          <p className="link">About Me</p>
          <img className="tunnel" src={tunnel} alt="tunnel" />
        </Link>
      </div>
    </div>
  );
}
