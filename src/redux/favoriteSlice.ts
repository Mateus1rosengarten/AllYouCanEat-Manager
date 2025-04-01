import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Favorites } from '../types/types';

const storedFavorites = localStorage.getItem('itemsFavorites');

const initialState: Favorites = {
  favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (name) => name !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }

      localStorage.setItem('itemsFavorites', JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
