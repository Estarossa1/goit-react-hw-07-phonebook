import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { CONTACTS } from './constants';

export const conctactsSlice = createSlice({
  name: CONTACTS,
  initialState: {
    contacts: [
      {
        "createdAt": "2023-07-22T00:56:10.861Z",
        "name": "Pete Nader",
        "phone": "1-997-235-1815",
        "id": "1"
      },
      {
        "createdAt": "2023-07-21T23:35:19.467Z",
        "name": "Matthew Ruecker",
        "phone": "238-800-7005 x025",
        "id": "2"
      },
      {
        "createdAt": "2023-07-22T04:41:59.364Z",
        "name": "Keith Mills",
        "phone": "618-303-7033 x54131",
        "id": "3"
      },
      {
        "createdAt": "2023-07-22T08:15:57.823Z",
        "name": "Marianne Rowe",
        "phone": "337-202-1148 x543",
        "id": "4"
      },
      {
        "createdAt": "2023-07-22T00:28:53.723Z",
        "name": "Boyd Tromp",
        "phone": "1-376-707-1723",
        "id": "5"
      },
      {
        "createdAt": "2023-07-21T17:59:01.118Z",
        "name": "Jeffery Bins",
        "phone": "(228) 327-1529 x10011",
        "id": "6"
      },
      {
        "createdAt": "2023-07-22T01:08:24.011Z",
        "name": "Glen Huels",
        "phone": "1-723-331-7042 x85282",
        "id": "7"
      },
      {
        "createdAt": "2023-07-21T16:13:23.541Z",
        "name": "Sally Pagac",
        "phone": "1-619-670-4449 x0846",
        "id": "8"
      },
      {
        "createdAt": "2023-07-21T10:53:36.669Z",
        "name": "Angelina Wilderman",
        "phone": "(989) 392-5352",
        "id": "9"
      }
    ],
    isLoading: false,
    error: null,
    deleteConfirmation: null,
  },

  reducers: {
    setDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      if (!state.deleteConfirmation) {
        state.isLoading = true;
      }
    },
    [deleteContact.fulfilled](state, action) {
      if (!state.deleteConfirmation) {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      }
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setDeleteConfirmation } = conctactsSlice.actions;
export default conctactsSlice.reducer;