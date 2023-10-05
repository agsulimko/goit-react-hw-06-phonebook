// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },

//   reducers: {
//     createContacts(state, action) {
//       console.log(state);
//       console.log(action);
//       state.contacts.push({
//         ...dataForm,
//         id: nanoid(),
//       });
//     },

//     // deleteContacts(state, action) { }
//   },
// });

// export const { createContacts, deleteContacts } = contactSlice.actions;
// export default contactSlice.reducer;

// contactsSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import contactslist from 'components/contactslist.json';
// const initialState = {
//   contacts: contactslist,
//   // contacts: [],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     setContacts(state, action) {
//       state.contacts = action.payload;
//     },
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
// export const selectContacts = state => state.contacts.contacts;
// export default contactsSlice.reducer;

// src / components / ContactList / contactSlice.js;
import contactslist from 'components/contactslist.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: contactslist,
  // [
  //   {
  //     id: 'id-1',
  //     name: 'Rosie Simpson',
  //     number: '459-12-56',
  //   },
  //   {
  //     id: 'id-2',
  //     name: 'Hermione Kline',
  //     number: '443-89-12',
  //   },
  //   {
  //     id: 'id-3',
  //     name: 'Eden Clements',
  //     number: '645-17-79',
  //   },
  //   {
  //     id: 'id-4',
  //     name: 'Annie Copeland',
  //     number: '227-91-26',
  //   },
  // ]
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts;
export default contactsSlice.reducer;
