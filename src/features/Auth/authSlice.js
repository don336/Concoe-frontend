import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./authService";

const isAuthenticated = localStorage.getItem("isAuthenticated");
const initialState = {
  isAuthenticated: isAuthenticated ? isAuthenticated : false,
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
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
        error: "",
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload,
      }));
  },
});

export default authSlice.reducer;
