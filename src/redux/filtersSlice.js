import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateFilters = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilters,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const { setFilter } = filtersSlice.actions;
export const getFilter = state => state;
export const filterReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);
