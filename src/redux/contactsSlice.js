import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  reducers: {
    addContact(state, action) {
      const includeName = () => {
        return state.contacts.find(
          e =>
            e.name.toLocaleLowerCase() ===
            action.payload.name.toLocaleLowerCase()
        );
      };
      const includeNumber = () => {
        return state.contacts.find(e => e.number === action.payload.number);
      };

      const contact = {
        id: nanoid(10),
        name: action.payload.name,
        number: action.payload.number,
      };
      if (includeName(contact.name)) {
        return alert(`${contact.name} is already in contacts`);
      }
      if (includeNumber(contact.number)) {
        return alert(`${contact.number} is already in contacts`);
      }
      state.contacts.push(contact);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(e => e.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
//export const getContacts = state => state.addContact.payload;
export const getContacts = state => state.contacts.contacts;
