import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import projects from "../projects";
import colorSharp2 from "../images/color-sharp2.png";

export default function Projects() {
  const tab1 = [projects[0], projects[1]];
  const tab2 = [projects[2], projects[3]];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="animate__animated animate__fadeInUp animate__repeat-1">
              <h2>Projects</h2>
              <p>These are the projects that I can proudly present</p>
              <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <div className="projects-tab-container">
                        {tab1.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </div>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <div className="projects-tab-container">
                        {tab2.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </div>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      <div className="projects-tab-container">
                        <ProjectCard key={4} {...projects[4]} />
                      </div>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
}
