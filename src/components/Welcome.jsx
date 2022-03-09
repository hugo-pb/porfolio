import React from "react";
import { Row, Col,  } from "react-bootstrap";
import Me from "./images/hugo-compu.png";
import "../Styles/Welcome.css"

export default function Welcome() {
  return (
    <div className="Welcome" >
   
        <Row xs={1} md={2}>
          <Col>
            {" "}
            <h1>Hey There!!</h1>
            <p>
              This is Hugo Palomera, a coding enthusiast looking for a junior
              position.{" "}
            </p>
          </Col>
          <Col>
            <img src={Me} alt="me" />
          </Col>
        </Row>
     
    </div>
  );
}
