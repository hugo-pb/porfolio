import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../Styles/About.css"
export default function About() {
  const [key, setKey] = useState("home");
  return (
    <div className="About">
      <h2>Abot Hugo</h2>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="home" title="Why coding?">
          <p>
            "Challenge accepted!" since i was i little kid i love solving
            puzzels, thinking out the box, and comming with unnique ideas. My brother was aways tech oriented but 
          </p>
        </Tab>
        <Tab eventKey="coding" title="When Im not coding? ">
          <p>hi</p>
        </Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
    </div>
  );
}
