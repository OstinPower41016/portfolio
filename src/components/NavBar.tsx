import * as React from "react";

import "./styles/NavBar.scss";
import pdfFile from "./assets/resume.pdf";
import Container from "./layout/container";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <p className="navbar__logo">Nikolay Larionov</p>
          <ul className="navbar__links">
            <li className="navbar__link">
              <a href="#home">Home</a>
            </li>
            <li className="navbar__link">
              <a href="#skills">Skills</a>
            </li>
            <li className="navbar__link">
              <a href="#portfolio">Portfolio</a>
            </li>

            <li className="navbar__link">
              <a href="#contacts">Contacs</a>
            </li>
            <li className="navbar__link">
              <a href={pdfFile} style={{ color: "#962525" }} target="_blank">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
