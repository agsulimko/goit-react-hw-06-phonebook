import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
    //   setFilter: {
    //     // reducer(_, action) {
    //     //   return { filter: action.payload };
    //     // },
    //     // setFilter: (_, action) => {
    //     //   return action.payload;
    //     // },
    //     // setFilter(state, action) {
    //     //   state.filter = action.payload;
    //     // },
    //   },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
