import jwt_decode from "jwt-decode";
import { store } from "../redux/store";
import { login } from "../features/Auth/authService";

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    // Dispatch the login.fulfilled action with the decoded data
    store.dispatch(login.fulfilled(decoded));
  }
};
