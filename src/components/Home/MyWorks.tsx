import * as React from "react";
import { useTranslation } from "react-i18next";

import "./styles/MyWorks.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
import MyWorksCarousel from "./MyWorks.carousel";
// slides-img
import picture from "./images/MyWorks/picture.jpg";
import irvas_window from "./images/MyWorks/irvas_window.jpg";
import pulse from "./images/MyWorks/pulse.png";
import uber from "./images/MyWorks/uber.jpg";

const slides = [
  {
    img: picture,
    title: "Picture.art",
    link: "https://ostinpower41016.github.io/ostinpower41016.pictute_project.github.io/",
  },
  {
    img: irvas_window,
    title: "Irvas windows",
    link: "https://ostinpower41016.github.io/ostinpower41016.window_project.github.io/",
  },
  {
    img: pulse,
    title: "RunSmart",
    link: "https://ostinpower41016.github.io/ostinpower41016.github.io.pulse/",
  },
  {
    img: uber,
    title: "Uber",
    link: "https://ostinpower41016.github.io/ostinpower41016.uber_project.github.io/",
  },
];

interface IMyWorksProps {}

const MyWorks: React.FunctionComponent<IMyWorksProps> = (props) => {
  const { t } = useTranslation();
  return (
    <section className="my-works" id="portfolio">
      <Container>
        <SectionHeader title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />
        <MyWorksCarousel slides={slides} />
      </Container>
    </section>
  );
};

export default MyWorks;
