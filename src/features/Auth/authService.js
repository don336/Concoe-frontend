import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const testData = {
//   firstName: "Dom",
//   lastName: "Breaker",
//   password: "password",
//   confirmPassword: "password",
//   email: "dom12@gmail.com",
// };

export const register = createAsyncThunk("register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      `http://Localhost:8000/api/v1/auth/signup`,
      data
    );
    const { accessToken } = response.data;
    localStorage.setItem("jwtToken", accessToken);
    // const decoded = jwt_decode(accessToken);
    // decoded.token = token;
    // dispatch(loginUserAction(decoded));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("register");
  }
});
