import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Styles/theme";
import { Provider } from "react-redux";
import Register from "./features/Auth/register/registration";
import Login from "./features/Auth/Login/Login";
import { store } from "./redux/store";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/signup" exact element={<Register />} />
          <Route path="/Login" exact element={<Login />} />
        </Routes>
      </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
