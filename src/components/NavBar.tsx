import * as React from "react";

import "./styles/NavBar.scss";
import Container from "./layout/container";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <p className="navbar__logo">Nikolay Larionov</p>
          <ul className="navbar__links">
            <li className="navbar__link">Home</li>
            <li className="navbar__link navbar__link--active">About</li>
            <li className="navbar__link">Skills</li>
            <li className="navbar__link">Blog</li>
            <li className="navbar__link">Works</li>
            <li className="navbar__link">Services</li>
            <li className="navbar__link">Contact</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
