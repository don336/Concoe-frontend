import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomers, addCustomer } from "./Customerservice";

const initialState = {
  customers: [],
  customer: {},
  isCustomer: false,
  isError: false,
  isSuccess: false
};
const CustomerSlice = createSlice({
  name: "Customer",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCustomers.fulfilled, (state, action) => ({
        ...state,
        isSuccess: true,
        customers: action.payload,
        error: ""
      }))
      .addCase(getAllCustomers.rejected, (state, action) => ({
        ...state,
        isSuccess: false,
        customers: "",
        error: action.payload
      }))
      .addCase(addCustomer.fulfilled, (state, action) => ({
        ...state,
        isError: false,
        isCustomer: true,
        isSuccess: true,
        customer: action.payload,
        error: "",
        editCrop: false
      }));
    //   .addCase(AddCrop.rejected, (state, action) => ({
    //     ...state,
    //     isError: true,
    //     crops: [],
    //     error: action.payload,
    //     editCrop: false
    //   }))
    //   .addCase(UpdateCrop.fulfilled, (state, action) => ({
    //     ...state,
    //     isError: false,
    //     crops: state.crops,
    //     crop: action.payload,
    //     error: "",
    //     editCrop: true
    //   }))
    //   .addCase(UpdateCrop.rejected, (state, action) => ({
    //     ...state,
    //     isError: true,
    //     crops: [],
    //     error: action.payload,
    //     editCrop: false
    //   }))
    //   .addCase(Delete.fulfilled, state => ({
    //     ...state,
    //     isError: false,
    //     isSuccess: true,
    //     error: "",
    //     editCrop: false
    //   }))
    //   .addCase(Delete.rejected, (state, action) => ({
    //     ...state,
    //     isSuccess: false,
    //     isError: true,
    //     error: action.payload,
    //     editCrop: false
    //   }));
  }
});

export default CustomerSlice.reducer;
