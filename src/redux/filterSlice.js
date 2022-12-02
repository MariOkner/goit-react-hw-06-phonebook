import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    selectFilter: (state, { payload }) => {
      return (state.value = payload);
    },
  },
});

export const { selectFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
