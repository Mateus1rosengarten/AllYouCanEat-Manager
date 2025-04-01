import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../types/types';

const savedMenu = localStorage.getItem('ItemsCart');

const initialState: CartState = {
  menu: savedMenu ? JSON.parse(savedMenu) : [],
};

const findMenuItem = (name: string, state: CartState) => {
  console.log('state', state.menu);
  return state.menu?.find((item) => item.name === name) || null;
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { name, quantity } = action.payload;
      const existingItem = findMenuItem(name, state);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.menu?.push({ name, quantity });
      }
    },

    removeItem: (state, action: PayloadAction<CartItem>) => {
      const { name, quantity } = action.payload;
      const existingItem = findMenuItem(name, state);
      if (!existingItem) return;
      console.log('item before', existingItem);
      existingItem.quantity -= quantity;
      console.log('item', existingItem);
      if (existingItem.quantity <= 0) {
        state.menu = state.menu.filter((item) => item.name !== name);
      }
      localStorage.setItem('ItemsCart', JSON.stringify(state.menu));
    },

    clearCart: (state) => {
      state.menu = [];
      localStorage.removeItem('ItemsCart');
    },
  },
});

export const { addItem, removeItem, clearCart } = menuSlice.actions;
export default menuSlice.reducer;
