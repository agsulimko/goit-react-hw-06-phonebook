import { nanoid } from 'nanoid';
import { initialState } from './initialState';
import { createContactsAction } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const reducerContacts = createReducer(initialState, {
  [createContactsAction]: (state, { type, payload }) => {
    return {
      ...state,
      contacts: state.contacts
        ? [...state.contacts, { ...payload, id: nanoid() }]
        : [{ ...payload, id: nanoid() }],
    };
  },
});
// export const reducerContacts = (state, { type, payload }) => {
//   switch (type) {
//     case 'createContacts':
//       return {
//         ...state,
//         contacts: state.contacts
//           ? [...state.contacts, { ...payload, id: nanoid() }]
//           : [{ ...payload, id: nanoid() }],
//       };

//     default:
//       return state;
//   }
// };
