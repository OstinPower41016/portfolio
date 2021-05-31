import * as React from "react";

import "./styles/Contact.scss";
import "./styles/Contact.input.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";

interface IContactProps {}

const ContactInput = (props: { type: string; placeholder: string }) => {
  return <input {...props} className="contact__input" />;
};

const ContactTextArea = (props: { placeholder: string }) => {
  return <textarea {...props} className="contact__textarea"></textarea>;
};

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <section className="contact">
      <Container>
        <SectionHeader title="Drop me a line">
          <span>
            You can write to me on my mailbox, or use social networks, and other communication
            methods specified in <a href="#">the footer of the site</a>
          </span>
        </SectionHeader>
        <form className="contact__form">
          <ContactInput type="text" placeholder="Name" />
          <ContactInput type="email" placeholder="Email" />
          <ContactTextArea placeholder="Your message..." />
          <button className="contact__action">Send Form</button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
