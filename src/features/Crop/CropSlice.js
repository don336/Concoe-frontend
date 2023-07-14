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
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCrops.fulfilled, (state, action) => ({
        ...state,
        isSuccess: true,
        crops: action.payload,
        error: "",
        editCrop: false,
      }))
      .addCase(getAllCrops.rejected, (state, action) => ({
        ...state,
        isError: true,
        crops: [],
        crop: [],
        error: action.payload,
        editCrop: false,
      }))
      .addCase(AddCrop.fulfilled, (state, action) => ({
        ...state,
        isError: false,
        crops: state.crops,
        crop: action.payload,
        error: "",
        editCrop: false,
      }))
      .addCase(AddCrop.rejected, (state, action) => ({
        ...state,
        isError: true,
        crops: [],
        error: action.payload,
        editCrop: false,
      }))
      .addCase(UpdateCrop.fulfilled, (state, action) => ({
        ...state,
        isError: false,
        crops: state.crops,
        crop: action.payload,
        error: "",
        editCrop: true,
      }))
      .addCase(UpdateCrop.rejected, (state, action) => ({
        ...state,
        isError: true,
        crops: [],
        error: action.payload,
        editCrop: false,
      }))
      .addCase(Delete.fulfilled, (state) => ({
        ...state,
        isError: false,
        isSuccess: true,
        error: "",
        editCrop: false,
      }))
      .addCase(Delete.rejected, (state, action) => ({
        ...state,
        isSuccess: false,
        isError: true,
        error: action.payload,
        editCrop: false,
      }));
  },
});

export default CropSlice.reducer;
