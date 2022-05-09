import React, { useEffect } from "react";
import tunnel from "./images/tunnel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import me from './images/hugo-compu.png'

import "../Styles/Welcome.css";
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
        <p className="link">Experience</p>
        <img className="tunnel" src={tunnel} alt="tunnel" />
      </div>
      <div className="image-2">
        <p className="link">About Me</p>
        <img className="tunnel" src={tunnel} alt="tunnel" />
      </div>
    </div>
  );
}
