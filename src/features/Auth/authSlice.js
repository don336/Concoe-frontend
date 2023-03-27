import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authService";

const initialState = {
  isAuthenticated: false,
  error: "",
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        error: "",
      }))
      .addCase(register.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload,
      }));
  },
});

export default authSlice.reducer;
