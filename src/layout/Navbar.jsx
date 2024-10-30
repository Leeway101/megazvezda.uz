import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import logo from "../images/logo.jpg";
import "flag-icons/css/flag-icons.min.css";
import "./Navbar.css";

const languages = {
  uz: {
    about: "Biz haqimizda",
    service: "Xizmat",
    contact: "Aloqa",
    lang: "O'zbek",
  },
  ru: {
    about: "О нас",
    service: "Сервис",
    contact: "Свяжитесь с нами",
    lang: "Русский",
  },
  en: {
    about: "About",
    service: "Service",
    contact: "Contact us",
    lang: "English",
  },
};

function App({ selectedLanguage, handleSelectLanguage }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              className="logo"
              style={{ width: "70px", height: "auto", borderRadius: "100px" }}
              alt="logo"
            />
            <span className="logo-text text-white fs-3 fw-bold">
              Megazvezda
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 justify-content-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ScrollLink
                to="about"
                smooth={true}
                duration={1000}
                offset={-70}
                className="nav-link text-light mx-3 fs-5"
                role="button"
              >
                {languages[selectedLanguage]?.about}
              </ScrollLink>
              <ScrollLink
                to="service"
                smooth={true}
                duration={1000}
                offset={-70}
                className="nav-link text-light mx-3 fs-5"
                role="button"
              >
                {languages[selectedLanguage]?.service}
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                offset={-70}
                className="nav-link text-light mx-3 fs-5"
                role="button"
              >
                {languages[selectedLanguage]?.contact}
              </ScrollLink>
            </Nav>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="outline-light"
                id="language-dropdown"
                className="ms-3"
              >
                <span className={`fi fi-${selectedLanguage} me-2`}></span>
                {languages[selectedLanguage]?.lang}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSelectLanguage("uz")}>
                  <span className="fi fi-uz me-2"></span> O'zbek
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectLanguage("ru")}>
                  <span className="fi fi-ru me-2"></span> Русский
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectLanguage("en")}>
                  <span className="fi fi-gb me-2"></span> English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
