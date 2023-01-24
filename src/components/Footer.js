import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../images/logo.png";
import stack from "../images/stack.svg";
import linkedin from "../images/linkedin.svg";
import gitHub from "../images/github.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end align-item-center">
            <div
              className="social-icon"
              style={{ display: "flex", alignItems: "center", float: "right" }}
            >
              <a
                href="https://www.linkedin.com/in/alin-alexandru-peter-3b1b93232/"
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/AlinAlexandruPeter" target="_blank">
                <img src={gitHub} alt="GitHub" />
              </a>
              <a
                href="https://stackoverflow.com/users/18346539/alin-alexandru-peter"
                target="_blank"
              >
                <img src={stack} alt="Stack Overflow" />
              </a>
            </div>
            <p>&copy; 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
