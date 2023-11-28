import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import cropReducer from "../features/Crop/CropSlice";
import customerReducer from "../features/Customer/CustomerSlice";
import saleReducer from "../features/Sales/SalesFeature/SaleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crops: cropReducer,
    customer: customerReducer,
    sales: saleReducer
  }
});
