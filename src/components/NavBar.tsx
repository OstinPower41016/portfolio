import * as React from "react";
import cn from "classnames";

import { useTranslation } from "react-i18next";
import "./styles/NavBar.scss";
import pdfFile from "./assets/resume.pdf";
import Container from "./layout/container";

interface INavBarProps {}

const NavLinks = () => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

const BurgerMenu = () => {
  const [isChecked, setChecked] = React.useState(false);
  const label = React.useRef<HTMLLabelElement>(null);
  const { t } = useTranslation();

  const inputChangeHandler = () => {
    setChecked(!isChecked);
    if (isChecked) {
      label.current?.focus();
    }
  };

  const closeDropDownHandler = () => {
    setChecked(false);
  };

  return (
    <div className="navbar__burger">
      <label
        className="navbar__burger-toggle"
        htmlFor="burger-menu"
        ref={label}
        onBlur={closeDropDownHandler}
        tabIndex={1}
      >
        <p className="navbar__burger-menu">{t("navbar.burger-menu")}</p>
        <input
          type="checkbox"
          id="burger-menu"
          className="navbar__burger-input"
          checked={isChecked}
          onChange={inputChangeHandler}
        />
        <div className="navbar__burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <ul
        className={cn("navbar__burger-dropdown", { "navbar__burger-dropdown--visible": isChecked })}
      >
        {<NavLinks />}
      </ul>
    </div>
  );
};

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const isMobile = document.documentElement.clientWidth <= 768;
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <a className="navbar__logo" href="#home">
            {t("navbar.logo")}
          </a>
          {isMobile ? <BurgerMenu /> : <ul className="navbar__links">{<NavLinks />}</ul>}
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
