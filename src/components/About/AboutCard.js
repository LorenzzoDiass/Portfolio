import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">lorenzzo Dias</span>{" "}
            from <span className="purple">São Paulo, Brazil</span>.
            <br />
            I’m {" "}
            <span className="purple">Software Engineering student</span> at{" "}
            <span className="purple">FIAP</span>,
            focused on building real-world digital solutions
            <br />I have experience working on projects involving{" "}
            <span className="purple">web development, APIs, and data, always aiming to create practical, scalable, and user-focused applications</span> 
            <br />
            <br />
            Outside of coding, I enjoy things that keep me creative and motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focused on building things that make a real difference."{" "}
          </p>
          <footer className="blockquote-footer">Lorenzzo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
