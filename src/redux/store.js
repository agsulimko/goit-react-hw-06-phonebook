// import { configureStore } from '@reduxjs/toolkit';
// // import { createAction, createReducer } from '@reduxjs/toolkit';
// import contactReducer from './contactSlice.js';
// import reduce from
// // const myReducer = createReducer(1000, {});
// export default store = configureStore({
//   reducer: {},
// });
// ================================================================

// import { nanoid } from 'nanoid';
// import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from '../redux/contact/contactsSlice';
// import filterReducer from '../redux/filter/filterSlice';

// store.js

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contact/contactsSlice';
import filterReducer from '../redux/filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
