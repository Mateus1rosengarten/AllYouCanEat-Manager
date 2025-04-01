import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartHistory, CartItem } from '../types/types';

const historyFromLocalStorage = localStorage.getItem('itemsHistory');

const initialState: CartHistory = {
  history: historyFromLocalStorage ? JSON.parse(historyFromLocalStorage) : [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addItemToHistory: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.history.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex !== -1) {
        state.history[itemIndex].quantity += action.payload.quantity;
      } else {
        state.history.push(action.payload);
      }
    },
  },
});

export const { addItemToHistory } = historySlice.actions;
export default historySlice.reducer;
