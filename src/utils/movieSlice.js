import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "user",
  initialState: {
    movies_list: null,
  },
  reducers: {
    appendMovie: (state, action) => {
      state.movies_list = action.payload;
    },
  },
});

export const { appendMovie } = movieSlice.actions;

export default movieSlice.reducer;
