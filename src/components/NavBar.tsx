import * as React from "react";
import { NavLink } from "react-router-dom";

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
            <li className="navbar__link">
              <NavLink to="/" exact activeClassName="navbar__link--active">
                Home
              </NavLink>
            </li>
            <li className="navbar__link">
              <NavLink to="/about" activeClassName="navbar__link--active">
                About
              </NavLink>
            </li>
            <li className="navbar__link">
              <NavLink to="/Blog" activeClassName="navbar__link--active">
                Blog
              </NavLink>
            </li>
            <li className="navbar__link">
              <NavLink to="/Services" activeClassName="navbar__link--active">
                Services
              </NavLink>
            </li>
            <li className="navbar__link">
              <NavLink to="/Contacts" activeClassName="navbar__link--active">
                Contacs
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
