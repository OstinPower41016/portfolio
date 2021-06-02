import * as React from "react";

import { useTranslation } from "react-i18next";
import "./styles/NavBar.scss";
import pdfFile from "./assets/resume.pdf";
import Container from "./layout/container";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <a className="navbar__logo" href="#home">
            {t("navbar.logo")}
          </a>
          <ul className="navbar__links">
            <li className="navbar__link">
              <a href="#skills">{t("navbar.skills")}</a>
            </li>
            <li className="navbar__link">
              <a href="#portfolio">{t("navbar.portfolio")}</a>
            </li>

            <li className="navbar__link">
              <a href="#contacts">{t("navbar.contacts")}</a>
            </li>
            <li className="navbar__link">
              <a href={pdfFile} style={{ color: "#962525" }} target="_blank">
                {t("navbar.download_resume")}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
