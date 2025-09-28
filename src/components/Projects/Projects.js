import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloth from "../../Assets/Projects/arvr.png";
import quick from "../../Assets/Projects/quick.png";
import video from "../../Assets/Projects/video.png";
import palm from "../../Assets/Projects/palm.png";
import music from "../../Assets/Projects/music.png";
import memory from "../../Assets/Projects/memory.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palm}
              isBlog={false}
              title="Palm Leaf Letter Detection and Recognisation"
              description="Developed a project for palm leaf manuscript detection and recognition, achieving a 72% accuracy rate,utilizing techniques like CRAFT and VGGNet."
              ghLink="https://github.com/vallimangai/Palm-Leaf-Letter-detection-and-recognisation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Assistance"
              description="Implemented a facial recognition project to assist patients with amnesia, incorporating interactive games and music therapy. Achieved an 80% reduction in training time using Siamese network architecture."
              ghLink="https://github.com/vallimangai/Memory-Assisstance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Decentralised Music App"
              description="This project is to allow musicians and distributors to share details of rights and royalties for music tracks online. These smart contracts automatically license recordings and take payment each time they are played."
              ghLink="https://github.com/vallimangai/Decentralised-Music-App"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloth}
              isBlog={false}
              title="Virtual Try-on"
              description="'Virtual Try-on' is a cloud-based web application that enables users to virtually try on products such as dresses, watches, shoes, earrings. This system was created using Snapchat's Lens Studio"
              ghLink="https://github.com/vallimangai/Virtual-try-ons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video-Visage-Sender"
              description="Instantly share personalized photos from videos like weddings or parties, using advanced computer vision to detect faces and automated WhatsApp messaging with Selenium."
              ghLink="https://github.com/vallimangai/Video-Visage-Sender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quick}
              isBlog={false}
              title="QuickStudy" 
              description="QuickStudy is an AI-driven educational tool that uses NLP and ML to summarize uploaded PDFs, images, or text, deliver concise answers, and generate MCQs with adaptive assessments"
              ghLink="https://github.com/vallimangai/Quick-Study"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
