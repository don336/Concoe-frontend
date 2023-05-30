import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../../config/client";

const config = {
  Headers: {
    Authentication: `Bearer ${localStorage.getItem("access_token")}`,
  },
};
export const getAllCrops = createAsyncThunk(
  "getAllCrops",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/crop/`, config);
      return response.data.crops;
    } catch (error) {
      return thunkAPI.rejectWithValue(response.message);
    }
  }
);
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
