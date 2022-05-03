import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../Styles/Welcome.css";
export default function Welcome() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="Welcome " id="Home">
      <div className="container">
        <div className="row">
          <div
            className=""
            style={{ position: "absolute", top: "10rem", width: "13rem" }}
          >
            <p data-aos="fade-left">
              HUGO PALOMERA
              <br />
              SOFTWARE ENGINEER
            </p>{" "}
            {/* <h1>Hey There!!</h1>
            <p>
              This is Hugo, a front-end developer with a passion for learning and
            problem-solving. I fell in love with coding while collaborating
              with programmers at the Watch Tower Bible and Tract Society of
              Canada, after which I decided to make it a career. I look forward
              to contributing to new solutions and growing in the industry
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
