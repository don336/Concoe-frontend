import { createSlice } from "@reduxjs/toolkit";
import { register, login, update } from "./authService";

const isAuthenticated = localStorage.getItem("isAuthenticated");
const initialState = {
  isAuthenticated: isAuthenticated ? isAuthenticated : false,
  error: "",
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    reset: async (state) => {
      {
        await localStorage.removeItem("jwtToken");
      }
    },
  },
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
      }))
      .addCase(update.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
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
export const { reset } = authSlice.actions;
export default authSlice.reducer;
