import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    signInUser: (state, action) => {
      return action.payload;
    },
    logOutUser: (state, action) => {
      return null;
    },
  },
});

export const { signInUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
