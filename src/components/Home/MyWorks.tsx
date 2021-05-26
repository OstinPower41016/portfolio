import * as React from "react";

import "./styles/MyWorks.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";

interface IMyWorksProps {}

const subtitle = `Works that are not protected by confidentiality, clicking on the work
you go to the link to my third-party resource`;

const MyWorks: React.FunctionComponent<IMyWorksProps> = (props) => {
  return (
    <section className="my-works">
      <Container>
        <SectionHeader title="My latest works" subtitle={subtitle} />
      </Container>
    </section>
  );
};

export default MyWorks;
