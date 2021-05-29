import * as React from "react";
import Container from "../layout/container";

import "./styles/Quote.scss";

interface IQuoteProps {}

const Quote: React.FunctionComponent<IQuoteProps> = (props) => {
  return (
    <section className="quote">
      <Container>
        <div className="quote__wrapper">
          <q className="quote__text">
            Most good programmers do their work not because they expect to be paid or recognized,
            but because they enjoy programming.{" "}
          </q>
          <span className="quote__author">Linus Torvalds</span>
        </div>
      </Container>
    </section>
  );
};

export default Quote;
