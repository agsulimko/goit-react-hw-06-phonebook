import { nanoid } from 'nanoid';

import { createStore } from 'redux';
const reducerContacts = (state, { type, payload }) => {
  switch (type) {
    case 'createContacts':
      return {
        ...state,
        contacts: state.contacts
          ? [...state.contacts, { ...payload, id: nanoid() }]
          : [{ ...payload, id: nanoid() }],
      };

    default:
      return state;
  }
};
export default reducerContacts;
