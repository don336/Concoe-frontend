import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/client";

const config = {
  Headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
  }
};

export const getAllCustomers = createAsyncThunk("getAllCustomers", async thunkAPI => {
  try {
    axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
    const response = await axios.get(`${baseUrl}customers/`);
    return response.data.customers;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addCustomer = createAsyncThunk("addCustomer", async (data, thunkAPI) => {
  axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
  try {
    const response = await axios.post(`${baseUrl}customers/`, data);
    return response.data.customer;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const UpdateCrop = createAsyncThunk("updateCrop", async (data, thunkAPI) => {
//   axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
//   try {
//     const { cropId } = data;
//     const response = await axios.put(`${baseUrl}crop/${cropId}`, data);
//     return response.data.crop;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const Delete = createAsyncThunk("deleteCrop", async (id, thunkAPI) => {
//   axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
//   try {
//     const response = await axios.delete(`${baseUrl}crop/${id}`);
//     return response.data.crop;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
