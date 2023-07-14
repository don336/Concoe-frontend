import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

import { baseUrl } from "../../config/client";

export const register = createAsyncThunk("register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signup`, data);
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    const decoded = jwt_decode(accessToken);
    return decoded;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
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

export const update = createAsyncThunk("update", async (data, thunkAPI) => {
  try {
    axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;

    const response = await axios.put(`${baseUrl}auth/user/${data.id}`, data);
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    const decoded = jwt_decode(accessToken);

    return decoded;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const Delete = createAsyncThunk("delete", async (id, thunkAPI) => {
  try {
    axios.defaults.headers.common.Authorization = ` ${localStorage.getItem("jwtToken")}`;

    const response = await axios.delete(`${baseUrl}auth/user/${id}`);

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
