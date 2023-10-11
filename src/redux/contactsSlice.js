import { createSlice } from '@reduxjs/toolkit';
import contactslist from 'components/contactslist.json';
export const contactssSlice = createSlice({
  name: 'contacts',
  initialState: contactslist,
  reducers: {
    createContacts: (state, action) => {
      // console.log(action);
      // console.log(state);
      // console.log(action.payload);

      state.push(action.payload);
    },
    deleteContacts: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { createContacts, deleteContacts } = contactssSlice.actions;

export const contactsReducer = contactssSlice.reducer;