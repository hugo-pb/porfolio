import React from "react";


import "../Styles/Welcome.css";
import DD from "./images/3d.glb"
export default function Welcome() {
  return (
    <div className="Welcome container-fluit" id="Home">
      <div className="col-sm-6">
        {" "}
        <h1>Hey There!!</h1>
        <p>
          This is Hugo Palomera, a coding enthusiast looking for a junior
          position.{" "}
        </p>
      </div>
      <div className="col-md-6">
        <model-viewer
          alt="3d island model"
          src={DD}
          className="dd"
          camera-controls
          style={{ height: "350px" }}
        ></model-viewer>
      </div>
    </div>
  );
}
