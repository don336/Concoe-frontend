import { createSlice } from "@reduxjs/toolkit";
import { getAllCrops, AddCrop, Delete, UpdateCrop } from "./CropServices";

const initialState = {
  crops: [],
  crop: [],
  isError: false,
  isSuccess: false,
};
const CropSlice = createSlice({
  name: "Crop",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCrops.fulfilled, (state, action) => ({
        ...state,
        isSuccess: true,
        crops: action.payload,
        error: "",
      }))
      .addCase(getAllCrops.rejected, (state, action) => ({
        ...state,
        isError: true,
        crops: [],
        crop: [],
        error: action.payload,
      }))
      .addCase(AddCrop.fulfilled, (state, action) => ({
        ...state,
        isError: false,
        crops: state.crops,
        crop: action.payload,
        error: "",
      }))
      .addCase(AddCrop.rejected, (state, action) => ({
        ...state,
        isError: true,
        crops: [],
        error: action.payload,
      }))
      .addCase(UpdateCrop.fulfilled, (state, action) => ({
        ...state,
        isError: false,
        crops: state.crops,
        crop: action.payload,
        error: "",
      }))
      .addCase(UpdateCrop.rejected, (state, action) => ({
        ...state,
        isError: true,
        crops: [],
        error: action.payload,
      }))
      .addCase(Delete.fulfilled, (state) => ({
        ...state,
        isError: false,
        isSuccess: true,
        error: "",
      }))
      .addCase(Delete.rejected, (state, action) => ({
        ...state,
        isSuccess: false,
        isError: true,
        error: action.payload,
      }));
  },
});

export default CropSlice.reducer;
