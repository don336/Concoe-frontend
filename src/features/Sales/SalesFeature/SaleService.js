import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../config/client";

export const getAllSales = createAsyncThunk("getAllSales", async thunkAPI => {
  try {
    axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
    const response = await axios.get(`${baseUrl}sales/`);
    return response.data.Sales;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteSale = createAsyncThunk("deleteSale", async (ids, thunkAPI) => {
  try {
    axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
    const response = await axios.delete(`${baseUrl}sales/${ids.customerId}/${ids.saleId}`);
    response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addSale = createAsyncThunk("addSale", async (data, thunkAPI) => {
  axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;
  const customerId = localStorage.getItem("customerId");
  try {
    const response = await axios.post(`${baseUrl}sales/${customerId}`, data);
    return response.data.sale;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
