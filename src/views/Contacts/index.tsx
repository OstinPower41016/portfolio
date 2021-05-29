import * as React from "react";

import ContactsViews from "../../components/Contacts/ContactsView";

interface IContactsProps {}

const Contacts: React.FunctionComponent<IContactsProps> = (props) => {
  return (
    <>
      <ContactsViews />
    </>
  );
};

export default Contacts;
