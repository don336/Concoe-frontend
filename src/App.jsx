import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Styles/theme";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/Login" exact element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
