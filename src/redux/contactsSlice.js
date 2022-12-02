import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items = [payload, ...state.items];
      },
      prepare: contact => ({ payload: { id: nanoid(), ...contact } }),
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
