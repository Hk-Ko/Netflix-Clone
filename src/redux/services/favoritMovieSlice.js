import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  favMovies: [],
  searchFavContact : ''
};

const STORAGE_KEY = "favMovies";

const storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) {
  initialState.favMovies = JSON.parse(storedItems);  
}


export const favoriteMovieSlice = createSlice({
  name: "favoriteMovie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      const isExisted = state.favMovies.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.favMovies = [...state.favMovies, { ...payload}];
      }
      
      Cookies.set(STORAGE_KEY, JSON.stringify(state.favMovies));
    },
    removeMovie: (state, { payload }) => {
      state.favMovies = state.favMovies.filter((item) => item.id !== payload.id);
      
    },
    clearMovie: (state) => {
      state.favMovies = [];
      return state;
    },
    addFavoriteContacts : (state, {payload}) => {
        state.contacts = payload
    },
    setSearchFavoriteContact : (state , {payload}) => {
        state.searchFavContact = payload
    }
  },
});

export const { addMovie, removeMovie, clearMovie ,addFavoriteContacts ,setSearchFavoriteContact } =
  favoriteMovieSlice.actions;

export default favoriteMovieSlice.reducer;