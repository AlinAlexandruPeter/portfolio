import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import stack from "../images/stack.svg";
import linkedin from "../images/linkedin.svg";
import gitHub from "../images/github.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div
              className="social-icon"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a
                href="https://linkedin.com/in/alin-alexandru-peter-3b1b93232/"
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/AlinAlexandruPeter" target="_blank">
                <img src={gitHub} alt="GitHub Icon" />
              </a>
              <a
                href="https://stackoverflow.com/users/18346539/alin-alexandru-peter"
                target="_blank"
              >
                <img src={stack} alt="StackOverflow Icon" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                document.getElementById("connect").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <span>let’s connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
