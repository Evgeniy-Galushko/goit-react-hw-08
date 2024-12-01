import { createSlice } from "@reduxjs/toolkit";

const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export default authSlise.reducer;
