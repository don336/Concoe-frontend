import { createSlice } from "@reduxjs/toolkit";
import { getAllCrops, AddCrop, deleteCrop, UpdateCrop } from "./CropServices";

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
      crop: [],
      error: action.payload,
    }));
    builder.addCase(AddCrop.fulfilled, (state, action) => ({
      ...state,
      isError: false,
      crops: state.crops,
      crop: action.payload,
      error: "",
    }));
    builder.addCase(AddCrop.rejected, (state, action) => ({
      ...state,
      isError: true,
      crops: [],
      error: action.payload,
    }));
    builder.addCase(UpdateCrop.fulfilled, (state, action) => ({
      ...state,
      isError: false,
      crops: state.crops,
      crop: action.payload,
      error: "",
    }));
    builder.addCase(UpdateCrop.rejected, (state, action) => ({
      ...state,
      isError: true,
      crops: [],
      error: action.payload,
    }));
    builder.addCase(deleteCrop.fulfilled, (state, action) => ({
      ...state,
      isError: false,
      crops: state.crops,
      crop: action.payload,
      error: "",
    }));
    builder.addCase(deleteCrop.rejected, (state, action) => ({
      ...state,
      isError: true,
      crops: [],
      error: action.payload,
    }));
  },
});

export default CropSlice.reducer;
