import { createSlice } from '@reduxjs/toolkit';
import contactslist from 'components/contactslist.json';
export const contactssSlice = createSlice({
  name: 'contacts',
  initialState: contactslist,
  reducers: {
    createContacts: (state, action) => {
      state.push(action.payload);
    },
    deleteContacts: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
    //
  },
});

export const { createContacts, deleteContacts } = contactssSlice.actions;

export const contactsReducer = contactssSlice.reducer;
// export default contactssSlice.reducer;
// ===================================================
// import { createSlice } from '@reduxjs/toolkit';

// // import { createObjectContacts } from './helpers';
// import contactslist from 'components/contactslist.json';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactslist,
//   reducers: {
//     // createContactsAction: {
//     //   prepare: (createObjectContacts = data => {
//     //     return {
//     //       payload: {
//     //         ...data,
//     //         id: nanoid(),
//     //       },
//     //     };
//     //   }),
//     //   setContacts(state, action) {
//     //     state.contacts = action.payload;
//     //   },
//     // },
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

// export const selectContacts = state => state.contacts.contacts;

// export default contactsSlice.reducer;
// export const contactsReducer = contactsSlice.reducer;

// export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
