import * as React from "react";

import "./styles/MyWorks.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
import MyWorksCarousel from "./MyWorksCarousel";

// slides-img
import first from "./images/MyWorks/1.jpg";
import second from "./images/MyWorks/2.jpg";
import third from "./images/MyWorks/3.jpg";
import fourth from "./images/MyWorks/4.jpeg";
import fifth from "./images/MyWorks/5.jpeg";
import sixth from "./images/MyWorks/6.jpg";

const slides = [first, second, third, fourth, fifth, sixth];

interface IMyWorksProps {}

const MyWorks: React.FunctionComponent<IMyWorksProps> = (props) => {
  return (
    <section className="my-works">
      <Container>
        <SectionHeader title="My Works" />
        <MyWorksCarousel slides={slides} />
      </Container>
    </section>
  );
};

export default MyWorks;
