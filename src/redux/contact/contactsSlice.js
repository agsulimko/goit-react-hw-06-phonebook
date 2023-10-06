import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createObjectContacts } from './helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContactsAction: {
      prepare: createObjectContacts,
      setContacts(state, action) {
        state.contacts = action.payload;
      },
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

export const selectContacts = state => state.contacts.contacts;

export default contactsSlice.reducer;
export const todoReducer = contactsSlice.reducer;

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;

// const initialState = {
//   contacts: contactslist,
//   // [
//   //   {
//   //     id: 'id-1',
//   //     name: 'Rosie Simpson',
//   //     number: '459-12-56',
//   //   },
//   //   {
//   //     id: 'id-2',
//   //     name: 'Hermione Kline',
//   //     number: '443-89-12',
//   //   },
//   //   {
//   //     id: 'id-3',
//   //     name: 'Eden Clements',
//   //     number: '645-17-79',
//   //   },
//   //   {
//   //     id: 'id-4',
//   //     name: 'Annie Copeland',
//   //     number: '227-91-26',
//   //   },
//   // ]
//   filter: '',
// };
