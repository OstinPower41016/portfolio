import * as React from "react";

import "./styles/MyWorks.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";

interface IMyWorksProps {}

const MyWorks: React.FunctionComponent<IMyWorksProps> = (props) => {
  return (
    <section className="my-works">
      <Container>
        <SectionHeader title="My Works" />
      </Container>
    </section>
  );
};

export default MyWorks;
