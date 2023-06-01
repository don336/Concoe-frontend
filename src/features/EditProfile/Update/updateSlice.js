import { createSlice } from "@reduxjs/toolkit";
import { update } from "./updateService";

const isAuthenticated = localStorage.getItem("isAuthenticated");
const initialState = {
  isAuthenticated: isAuthenticated ? isAuthenticated : false,
  error: "",
  updatedUser: {},
};

const authSlice = createSlice({
  name: "update",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(update.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        updatedUser: action.payload,
        error: "",
      }))
      .addCase(update.rejected, (state, action) => ({
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload,
      }));
  },
});

export default authSlice.reducer;
