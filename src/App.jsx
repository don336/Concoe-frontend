import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Styles/theme";
import { Provider } from "react-redux";
import Register from "./features/Auth/register/registration";
import Login from "./features/Auth/Login/Login";
import { store } from "./redux/store";
import Home from "./features/Home/Home";
import Crops from "./features/Crop/Layout/Crops";
import getWeather from "./utils/weather";
import Account from "./components/Account/Account";
function App() {
  getWeather();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <Routes>
            <Route path="/signup" exact element={<Register />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/Crops" exact element={<Crops />} />
            <Route path="/Account" exact element={<Account />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
