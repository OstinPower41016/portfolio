import * as React from "react";

import "./styles/Footer.scss";
import Container from "./layout/container";
// icons
import vkIcon from "./assets/images/Footer/VK.svg";
import facebookIcon from "./assets/images/Footer/Facebook.svg";
import githubIcon from "./assets/images/Footer/GitHub.svg";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__icons">
          <a href="#">
            <img src={vkIcon} alt="" />
          </a>
          <a href="#">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="#">
            <img src={githubIcon} alt="" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
