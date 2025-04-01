import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice';
import historyReducer from './historySlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    history: historyReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
