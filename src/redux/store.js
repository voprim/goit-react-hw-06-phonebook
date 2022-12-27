import { configureStore } from '@reduxjs/toolkit';
//import { combineReducers } from 'redux';
import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//import { contactsSlice } from './contactsSlice';
//import { filtersSlice } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

/*const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  contacts: contactsSlice.reducer,
  filters: filtersSlice.reducer,
});*/

//const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
