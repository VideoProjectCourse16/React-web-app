import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Favorites } from '../../models/favorites';

interface FavoritesState {
  selectedFavorite: string | undefined,
  favorites: Favorites[] | undefined

}

const initialState = { selectedFavorite: undefined, favorites: undefined } as FavoritesState

const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, {payload}: PayloadAction<string>) {
      state.selectedFavorite = payload;
    },
    fetchFavorites(state, {payload}: PayloadAction<Favorites[]>) {
      state.favorites = payload;
    },
  },
})

export const { addFavorite, fetchFavorites } = favorites.actions
export default favorites.reducer;

