import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Valliammai Valliappan </span>
            <br />
            I have been employed as a software engineer 2 at Dell Technologies.
            <br />
            I have completed Integrated MTech in Computer Science and Engineering with Specialisation in Data Science at VIT
            Vellore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding bikes
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love to solve complex problem!"{" "}
          </p>
          <footer className="blockquote-footer">Valliammai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
