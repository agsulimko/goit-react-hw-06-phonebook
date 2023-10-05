// import css from "./Contact.module.css";
// const Contact = ({ contacts, deleteContacts }) => {
//   return (
//     <li className={css.item}>
//       <h3>{contacts.name}</h3>
//       <h3>{contacts.number}</h3>

//       <button
//         type="button"
//         className={css.btnClose}
//         aria-label="Close"
//         onClick={() => deleteContacts(contacts.id)}
//       >
//         Delete
//       </button>
//     </li>
//   );
// };
// export default Contact;

// import { useDispatch } from "react-redux";

// import { deleteContact } from "../../redux//contact/contactsSlice";
// import css from "./Contact.module.css";

// Contact.js

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux//contact/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <h3>{contact.name}</h3>
      <h3>{contact.number}</h3>

      <button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
