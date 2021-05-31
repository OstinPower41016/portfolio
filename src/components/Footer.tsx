import * as React from "react";

import "./styles/Footer.scss";
import Container from "./layout/container";
// icons
import vkIcon from "./assets/images/Footer/Vk.png";
import telegramIcon from "./assets/images/Footer/Telegram.png";
import githubIcon from "./assets/images/Footer/Github.png";
import whatsUpIcon from "./assets/images/Footer/Whats-up.png";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer" id="contacts">
      <Container>
        <div className="footer__contacts">
          <h3 className="footer__header">Contacts</h3>
          <p className="footer__sub-header">Want to know more or just chat? </p>
          <div className="footer__icons">
            <a href="#">
              <img src={telegramIcon} alt="" />
            </a>
            <a href="#">
              <img src={whatsUpIcon} alt="" />
            </a>
            <a href="#">
              <img src={vkIcon} alt="" />
            </a>

            <a href="#">
              <img src={githubIcon} alt="" />
            </a>
          </div>
          <p className="footer__sub-header">You are welcome!</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
