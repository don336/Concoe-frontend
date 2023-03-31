import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/client";

// const testData = {
//   firstName: "Dom",
//   lastName: "Breaker",
//   password: "password",
//   confirmPassword: "password",
//   email: "dom12@gmail.com",
// };

export const register = createAsyncThunk("register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signup`, data);
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    // const decoded = jwt_decode(accessToken);
    // decoded.token = token;
    // dispatch(loginUserAction(decoded));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("register");
  }
});
export const login = createAsyncThunk("login", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signin`, data);
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    // const decoded = jwt_decode(accessToken);
    // decoded.token = token;
    // dispatch(loginUserAction(decoded));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
