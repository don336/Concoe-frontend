import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../config/client";

export const update = createAsyncThunk("update", async (data, thunkAPI) => {
  const config = {
    Headers: {
      Authentication: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  try {
    const response = await axios.post(
      `${baseUrl}/user/update/${data._id}`,
      config,
      data
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Update User Information");
  }
});
