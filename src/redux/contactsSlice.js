import { createSlice } from '@reduxjs/toolkit';
import contactslist from 'components/contactslist.json';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactslist,
  reducers: {
    createContacts: (state, action) => {
      state.push(action.payload);
    },
    deleteContacts: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
    editContacts: (state, action) => {
      const index = state.findIndex(
        contacts => contacts.id === action.payload.id
      );
      state.splice(index, 1, action.payload);
    },
  },
});

export const { createContacts, deleteContacts, editContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
