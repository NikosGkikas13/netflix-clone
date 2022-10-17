import { createSlice, current } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    myList: [],
    movieIDs: [],
    likedList: [],
    newItem: "",
  },
  reducers: {
    likeMovie: (state, action) => {
      state.likedList.push({ id: action.payload.id, liked: false });
    },
    add_remove_my_List: (state, action) => {
      // Add movie to liked list
      if (state.movieIDs.indexOf(action.payload.id) == -1) {
        state.myList = [...state.myList, action.payload];
        state.movieIDs = [...state.movieIDs, action.payload.id];
        state.newItem = state.likedList.filter((item) => {
          return item.id == action.payload.id;
        });
        state.newItem[0].liked = true;
        console.log(state.newItem);
      } else {
        // Remove movie from liked list
        const newArray = state.movieIDs.filter((item) => {
          return item != action.payload.id;
        });
        const newArrayList = state.myList.filter((item) => {
          return item.id != action.payload.id;
        });
        state.movieIDs = newArray;
        state.myList = newArrayList;
        state.newItem = state.likedList.filter((item) => {
          return item.id == action.payload.id;
        });
        state.newItem[0].liked = false;
      }
    },
  },
});

export const { add_remove_my_List, likeMovie } = movieSlice.actions;

export default movieSlice.reducer;
