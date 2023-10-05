// import Contact from "components/Contact/Contact";
// import css from "./ContactList.module.css";

// const ContactList = ({ contacts, filteredContacts, deleteContacts }) => {
//   return (
//     <ul className={css.list}>
//       {(filteredContacts ?? contacts).map((contact) => (
//         <Contact
//           contacts={contact}
//           key={contact.id}
//           deleteContacts={deleteContacts}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
// src/components/ContactList/ContactList.js

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   deleteContact,
//   selectFilteredContacts,
// } from "../../redux/contact/contactsSlice";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// ContactList.js

import { useSelector } from "react-redux";
import Contact from "components/Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
