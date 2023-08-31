import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../images/header-img.svg";
import "animate.css";

export default function Banner() {
  const toBeWritten = [
    "Frontend Developer",
    "React Developer",
    "JS Developer",
    "Problem Solver",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleteing, setIsDeleteing] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toBeWritten.length;
    let fullText = toBeWritten[i];
    let updatedText = isDeleteing
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleteing) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleteing && updatedText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleteing && updatedText === "") {
      setIsDeleteing(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeInUp animate__reapeat-1">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {"Hi I'm Peter, a "}
                <br />
                <span className="wrap">{text}</span>
                <p>
                  I am a Romanian self-taught Front End Developer that in the
                  last 2 years has been working as a Freelancer, helping local
                  companies, sport clubs and physical people to bring their
                  activity on the web. I am a person ready to bring my best into
                  the company and loves being challenged. I can say that I see
                  Frontend Development as an art, developers as artist and
                  therefore I am trying to bring the best art out of my skills.
                </p>
                <button>
                  <a
                    href="../Resume.pdf"
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank"
                  >
                    Resume
                    <ArrowRightCircle size={25} />
                  </a>
                </button>
              </h1>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
