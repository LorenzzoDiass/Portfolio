import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I'm a Software Engineering student who enjoys transforming ideas into real and practical digital solutions.
              I focus on building projects that combine functionality, performance, and user experience.
              <br />
              <br />
              Over time, I've been working with technologies like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React, Node.js, Java, and Python, developing both front-end and back-end applications.{" "}
                </b>
              </i>
              <br />
              <br />
              My main interests include web development, APIs, and creating systems that solve 
              <i>
                <b className="purple">
                  {" "}
                  real-world problems through technology.{" "}
                </b>
              </i>
              <br />
              <br />
              Beyond coding, I’m also involved in building business ideas and personal projects,
              always focused on improving my skills and building impactful solutions
              I enjoy working with modern technologies like 
              <i>
                <b className="purple"> React.js</b> and{" "}
                <b className="purple">Node.js</b>, 
              and I'm constantly learning and exploring new tools to grow as a developer.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
