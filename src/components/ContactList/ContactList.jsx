import Contact from "components/Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "redux/selectors";
import { selectContacts } from "redux/selectors";

const ContactList = () => {
  // const contacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact contacts={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
