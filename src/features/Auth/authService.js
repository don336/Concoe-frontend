import axios, { AxiosHeaders } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../../config/client";

export const register = createAsyncThunk("register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signup`, data);
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    const decoded = jwt_decode(accessToken);
    decoded.token = token;
    return decoded.user;
  } catch (error) {
    return thunkAPI.rejectWithValue("register");
  }
});
export const login = createAsyncThunk("login", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signin`, data);
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    const decoded = jwt_decode(accessToken);
    return decoded;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
