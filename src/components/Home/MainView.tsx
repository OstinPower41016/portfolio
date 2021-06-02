import * as React from "react";
import { useTranslation } from "react-i18next";

import "./styles/MainView.scss";
import Container from "../layout/container";
import MainViewSwitch from "./MainViewSwitch";
import styles from "./styles/MainView.about.module.scss";
import { GoArrowSmallDown } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

interface IMainViewProps {}

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <div className={styles["about__sub-header"]}>{t("about.subheader1")}</div>
      <div className={styles.about__header}>{t("about.header")}</div>
      <div className={styles["about__sub-header"]}>{t("about.subheader2")}</div>
      <span className={styles.about__background}></span>
    </div>
  );
};

const MainView: React.FunctionComponent<IMainViewProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="main-view" id="home">
      <Container>
        <div className="main-view__wrapper">
          <div className="main-view__switch">
            <MainViewSwitch />
          </div>
          <div className="main-view__status">
            <div>
              <span className="main-view__label-status">{t("status.title")}: </span>
              <span>{t("status.description")}</span>
            </div>
            <a href="#">
              <AiOutlineLink className="main-view__icon-link" />
              {t("status.link-to-contact")}
            </a>
          </div>
          <div className="main-view__about">
            <About />
          </div>
          <div className="main-view__scroll-icon">
            <GoArrowSmallDown className="main-view__icon" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainView;
