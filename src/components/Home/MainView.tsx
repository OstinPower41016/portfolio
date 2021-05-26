import * as React from "react";

import "./styles/MainView.scss";
import Container from "../layout/container";
import MainViewSwitch from "./MainViewSwitch";
import styles from "./styles/MainView.about.module.scss";
import { GoArrowSmallDown } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

interface IMainViewProps {}

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles["about__sub-header"]}>Hi, My name is Nikolay</div>
      <div className={styles.about__header}>I’m a web-developer</div>
      <div className={styles["about__sub-header"]}>
        creating modern and responsive Web Application
      </div>
      <span className={styles.about__background}></span>
    </div>
  );
};

const MainView: React.FunctionComponent<IMainViewProps> = (props) => {
  return (
    <div className="main-view">
      <Container>
        <div className="main-view__wrapper">
          <div className="main-view__switch">
            <MainViewSwitch />
          </div>
          <div className="main-view__status">
            <span className="main-view__label-status">Official status: </span>
            <span>In the search for remote or office work</span>
            <a href="#">
              <AiOutlineLink className="main-view__icon-link" />
              go to contact information
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
