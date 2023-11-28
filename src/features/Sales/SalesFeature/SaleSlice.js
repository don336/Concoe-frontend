import { createSlice } from "@reduxjs/toolkit";
import { getAllSales, deleteSale, addSale } from "./SaleService";

const initialState = {
  salesData: [],
  sale: {},
  isError: false,
  error: "",
  isSuccess: false
};
const SaleSlice = createSlice({
  name: "Sale",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllSales.fulfilled, (state, action) => ({
        ...state,
        isSuccess: true,
        salesData: action.payload,
        error: ""
      }))
      .addCase(getAllSales.rejected, (state, action) => ({
        ...state,
        isSuccess: false,
        salesData: "",
        error: action.payload
      }))
      .addCase(addSale.fulfilled, (state, action) => ({
        ...state,
        isError: false,
        isCustomer: true,
        isSuccess: true,
        sale: action.payload,
        error: ""
      }))
      .addCase(addSale.rejected, (state, action) => ({
        ...state,
        isError: true,
        isSuccess: false,
        sale: [],
        error: action.payload
      }))
      .addCase(deleteSale.fulfilled, state => ({
        ...state,
        isError: false,
        isSuccess: true,
        error: ""
      }))
      .addCase(deleteSale.rejected, (state, action) => ({
        ...state,
        isSuccess: false,
        isError: true,
        error: action.payload
      }));
  }
});

export default SaleSlice.reducer;
