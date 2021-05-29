import * as React from "react";

import "./styles/ContactsView.scss";
import Container from "../layout/container";
import BreadCrumbs from "../BreadCrumbs";
import BaseCard from "../UI/BaseCard";

interface IContactsViewsProps {}

const ContactsViews: React.FunctionComponent<IContactsViewsProps> = (props) => {
  return (
    <section className="contacts">
      <Container>
        <div className="contacts__content">
          <header className="contacts__header">Contacts</header>
          <BaseCard className="contacts__info">sds</BaseCard>
        </div>
      </Container>
    </section>
  );
};

export default ContactsViews;
