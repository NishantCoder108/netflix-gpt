import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    signInUser: (state, action) => {
      console.log({ action });

      state.userDetails = action.payload;
    },
    logOutUser: (state, action) => {
      state.userDetails = null;
    },
  },
});

export const { signInUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
