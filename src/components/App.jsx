// import { useState } from "react";
import css from "./App.module.css";
// import { nanoid } from "nanoid";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";
// import contactslist from "components/contactslist.json";
// import { useLocalStorage } from "hooks/useLocalStorage";
// import { useSelector } from "react-redux";
const App = () => {
  // const contacts = useSelector((state) => state.contacts);
  // const filter = useSelector((state) => state.filter);
  // const [contacts, setContacts] = useLocalStorage("contacts", []);
  // const [filter, setFilter] = useState("");
  // const valueLocalStorage = JSON.parse(localStorage.getItem("contacts"));

  // const [contacts, setContacts] = useState(
  //   valueLocalStorage.length > 0 ? valueLocalStorage : contactslist
  // );

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const createContacts = (newContact) => {
  // const isAlreadyExist = contacts.find((el) => el.name === newContact.name);
  // if (isAlreadyExist) return alert("Already Exist");
  // const newContact = {
  //   ...dataForm,
  //   id: nanoid(),
  // };
  // setContacts((prev) => [newContact, ...prev]);
  // };

  // const handleFilter = ({ target: { value } }) => {
  //   // setFilter(value);
  // };

  // const deleteContacts = (id) => {
  //   // setContacts((prev) => prev.filter((el) => el.id !== id));
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  // );

  // const filteredContacts = () => {
  //   const normalizedValue = filter.toLowerCase().trim();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedValue)
  //   );
  // };

  return (
    <div className="container">
      <h1 className={css.h1}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
