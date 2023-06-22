import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../../config/client";

const config = {
  Headers: {
    Authentication: `Bearer ${localStorage.getItem("access_token")}`,
  },
};
export const getAllCrops = createAsyncThunk("getAllCrops", async (thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/crop/`, config);
    return response.data.crops;
  } catch (error) {
    return thunkAPI.rejectWithValue(response.message);
  }
});
export const AddCrop = createAsyncThunk("AddCrop", async (data, thunkAPI) => {
  axios.defaults.headers.common["Authorization"] = ` ${localStorage.getItem(
    "jwtToken"
  )}`;
  try {
    const response = await axios.post(`${baseUrl}crop/`, data);
    return response.data.crop;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
