import React from "react";
import { Col } from "react-bootstrap";

export default function ProjectCard(props) {
  const { title, projURL, githubURL, description, imageURL } = props;

  const containerStyle = {
    backgroundImage: "url(" + imageURL + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <Col sm={6} md={5}>
      <div className="proj-imgbx" style={containerStyle}>
        <div className="proj-txtx">
          <h4>
            <a href={projURL} style={linkStyle} target="_blank">
              {title}
            </a>
          </h4>
          <span>{description}</span>
          <br />
          <a
            href={githubURL}
            style={{ ...linkStyle, fontSize: "30px", marginTop: "15px" }}
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </Col>
  );
}
