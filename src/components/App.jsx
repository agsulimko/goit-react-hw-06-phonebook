// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "../redux/store";
// import persistor from "../redux/store";
// // import "./App.css";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <div className="container">
//           <h1 className="h1">Phonebook</h1>
//           <ContactForm />
//           <h2 className="h2">Contacts</h2>
//           <Filter />
//           <ContactList />
//         </div>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;

// src/App.js

// import React from "react";
// // import { nanoid } from "nanoid";
// import { useSelector, useDispatch } from "react-redux";
// import { selectContacts } from "../redux/contact/contactsSlice";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import Filter from "components/Filter/Filter";
// // import contactslist from "components/contactslist.json";
// // import { store } from "../redux/store";
// import css from "./App.module.css";

// App.js

import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContacts } from "../redux/contact/contactsSlice";
import { setFilter } from "../redux/filter/filterSlice";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";
// import contactslist from "components/contactslist.json";
// import { Provider } from "react-redux"; // Ensure you import Provider
// import store from "../redux/store"; // Import your Redux store

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const valueLocalStorage = JSON.parse(localStorage.getItem("contacts"));

  useEffect(() => {
    if (valueLocalStorage && valueLocalStorage.length > 0) {
      dispatch(setContacts(valueLocalStorage));
    }
  }, [dispatch, valueLocalStorage]);

  useEffect(() => {
    if (valueLocalStorage && valueLocalStorage.length === 0) {
      dispatch(setContacts(valueLocalStorage));
    }
  }, [dispatch, valueLocalStorage]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div className="container">
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.h2}>Contacts</h2>
      <Filter handleFilter={handleFilter} />

      <ContactList filter={filter} />
    </div>
  );
};

export default App;
