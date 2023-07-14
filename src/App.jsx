import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import Register from "./features/Auth/register/registration";
import Login from "./features/Auth/Login/Login";
import { store } from "./redux/store";
import Home from "./features/Home/Home";
import Crops from "./features/Crop/ViewCrops/Crops";
import ViewProfile from "./features/Profile/ViewProfile/ViewProfile.jsx";
import UpdateProfile from "./features/Profile/UpdateProfile/UpdateProfile";
import AddCrop from "./features/Crop/AddCrop/AddCrop";
import About from "./features/About/About.jsx";

function App() {
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
            <Route path="/ViewProfile" exact element={<ViewProfile />} />
            <Route
              path="/ViewProfile/update-account"
              exact
              element={<UpdateProfile />}
            />
            <Route path="/Crops/add-crop" exact element={<AddCrop />} />
            <Route path="/About" exact element={<About />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
