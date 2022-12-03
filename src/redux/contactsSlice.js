import { toast } from 'react-toastify';

import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        if (
          state.some(contact => {
            return (
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
            );
          })
        ) {
          toast.warn(`${action.payload.name} is already in contacts`);
          return;
        }

        state.push(action.payload);
      },
      prepare: payload => ({
        payload: { id: nanoid(), name: payload.name, number: payload.number },
      }),
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
