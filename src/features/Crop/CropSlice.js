import { createSlice } from "@reduxjs/toolkit";
import { getAllCrops } from "./CropServices";

const initialState = {
  crops: [],
  isError: false,
  isSuccess: false,
};
const CropSlice = createSlice({
  name: "Crop",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCrops.fulfilled, (state, action) => ({
      ...state,
      isSuccess: true,
      crops: action.payload,
      error: "",
    }));
    builder.addCase(getAllCrops.rejected, (state, action) => ({
      ...state,
      isError: true,
      crops: [],
      error: action.payload,
    }));
  },
});

export default CropSlice.reducer;
