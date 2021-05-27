import * as React from "react";

import "./styles/MyWorks.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
import MyWorksCarousel from "./MyWorks.carousel";
// slides-img
import first from "./images/MyWorks/1.jpg";
import second from "./images/MyWorks/2.jpg";
import third from "./images/MyWorks/3.jpg";
import fourth from "./images/MyWorks/pulse.png";
import fifth from "./images/MyWorks/uber.jpg";
import sixth from "./images/MyWorks/6.jpg";

const slides = [
  {
    img: first,
    title: "Web-site about air ballons 1",
    stack: "this is a web-site wrote on jquery framework 1",
  },
  {
    img: second,
    title: "Web-site about air ballons 2",
    stack: "this is a web-site wrote on jquery framework 2",
  },
  {
    img: third,
    title: "Web-site about air ballons 3",
    stack: "this is a web-site wrote on jquery framework 3",
  },
  {
    img: fourth,
    title: "Web-site about air ballons 4",
    stack: "this is a web-site wrote on jquery framework 4",
  },
  {
    img: fifth,
    title: "Web-site about air ballons 5",
    stack: "this is a web-site wrote on jquery framework 5",
  },
  {
    img: sixth,
    title: "Web-site about air ballons 6",
    stack: "this is a web-site wrote on jquery framework 6",
  },
];

interface IMyWorksProps {}

const subtitle = `Works that are not protected by confidentiality, clicking on the work
you go to the link to my third-party resource`;

const MyWorks: React.FunctionComponent<IMyWorksProps> = (props) => {
  return (
    <section className="my-works">
      <Container>
        <SectionHeader title="Latest works" subtitle={subtitle} />
        <MyWorksCarousel slides={slides} />
      </Container>
    </section>
  );
};

export default MyWorks;
