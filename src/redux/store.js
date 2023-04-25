import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import cropReducer from "../features/Crop/CropSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crops: cropReducer,
  },
});
