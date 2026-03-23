import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import formulaEImg from "../../Assets/Projects/Formula-e.png.png";
import movieImg from "../../Assets/Projects/movie-portal.png";
import calculatorImg from "../../Assets/Projects/calculator.png";
import pythonImg from "../../Assets/Projects/python.png";
import tsImg from "../../Assets/Projects/typescript.png";
import soapImg from "../../Assets/Projects/soap.png";

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
              imgPath={formulaEImg}
              isBlog={false}
              title="Formula E Community Website"
              description="A responsive website developed to promote Formula E and engage its community through interactive features. Built as a group project based on a Figma prototype, using HTML, CSS, and JavaScript, with functionalities such as buttons, image manipulation, and news pop-ups."
              ghLink="https://github.com/LorenzzoDiass/sprint1-webdev-formulae.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieImg}
              isBlog={false}
              title="Movie Portal Platform"
              description="A responsive movie web application built with HTML, CSS, and JavaScript, featuring movie listings, detailed pages, and REST API integration."
              ghLink="https://github.com/LorenzzoDiass/projeto-portal-filme.git"
              demoLink="https://projeto-portal-filme.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculatorImg}
              isBlog={false}
              title="C# Console Calculator"
              description="A console-based calculator application developed in C# using .NET, featuring basic arithmetic operations and control flow structures such as conditionals, loops, and error handling for invalid operations."
              ghLink="https://github.com/LorenzzoDiass/csharp-calculator.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              isBlog={false}
              title="Formula E Stats Console App"
              description="A console-based application developed in Python to explore Formula E teams and drivers, providing basic information and championship statistics through an interactive menu system. Built as a group project."
              ghLink="https://github.com/LorenzzoDiass/sprint1-python-formulae.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsImg}
              isBlog={false}
              title="Medical Appointment System"
              description="A medical appointment system developed in TypeScript, focusing on domain modeling and business logic. The project includes features such as creating, confirming, and canceling appointments, status management, and revenue calculation, applying concepts like strong typing, interfaces, and structured code organization."
              ghLink="https://github.com/LorenzzoDiass/sistema-consultas-typescript.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soapImg}
              isBlog={false}
              title="SOAP Web Service"
              description="A SOAP-based web service system developed in Java, including both service publishing and client consumption. The project implements services such as menu retrieval, order processing, and warning notifications using JAX-WS, demonstrating concepts of SOA architecture and web service integration."
              ghLink="https://github.com/LorenzzoDiass/checkpoint1-soap-webservice.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
