import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
               I fell in love with building scalable systems and solving complex problems, and I’ve learned quite a lot along the way… 🤓
              <br />
              <br />💻 I am fluent in
              <i>
                <b className="purple"> Microservices, Golang, Kubernetes, and Docker. 🐳 </b>
              </i>
              <br />
              <br/>🏢 At Dell Technologies, I built and improved catalog generation services to make systems more efficient and scalable. 
              <br/>
              <br/>💡I also patented an AI-driven solution 🤖 that automated the breakdown of BSpec into epics and user stories, authorized under Dell/DellEMC Invention Disclosure.
              <br />
              <br />
             🤖 My field of interest lies in &nbsp;
              <i>
                <b className="purple">deep learning, machine learning, and data visualization 📊 — <br/>
                   &nbsp; I love using data to drive smart decisions. </b>
    
              </i>
              <br />
              <br />
              ⚡Whenever possible, I channel my passion into developing innovative products and exploring modern technologies that shape the future. 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vallimangai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/valliammai-v-4a7a1a19a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
