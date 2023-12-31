import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContacts, editContacts } from "redux/contactsSlice";
import { useEffect, useState } from "react";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(contacts.name);
  const [number, setNumber] = useState(contacts.number);

  const handlEdit = () => {
    setIsEditMode((prev) => !prev);
  };
  const handleDelete = () => dispatch(deleteContacts(contacts.id));

  useEffect(() => {
    if (!isEditMode && (name !== contacts.name || number !== contacts.number)) {
      // handlEditWord({
      // id: word.id,
      // ukWord,
      // enWord,
      // });
      dispatch(editContacts({ id: contacts.id, name, number }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode]);

  const handleInputChange = ({ target }) => {
    if (target.name === "editName") {
      setName(target.value);
      return;
    }
    setNumber(target.value);
  };
  return (
    <li className={css.item}>
      {!isEditMode ? (
        <div className={css.nameNumber}>
          <h3 className={css.name}>{contacts.name}</h3>
          <h3 className={css.number}>{contacts.number}</h3>
        </div>
      ) : (
        <>
          <input
            onChange={handleInputChange}
            type="text"
            name="editName"
            value={name}
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="editNumber"
            value={number}
          />
        </>
      )}
      <button onClick={handlEdit}>{isEditMode ? "Save" : "Edit"}</button>
      <button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
        sx={{ m: 1, width: "110px" }}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
