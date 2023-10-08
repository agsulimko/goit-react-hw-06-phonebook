import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // setFilter: (_, action) => {
    //   return action.payload;
    // },
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },

    setFilter: {
      reducer(state, action) {
        return { filter: action.payload };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
