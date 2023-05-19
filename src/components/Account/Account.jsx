import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  FormLabel,
  TextField,
  Grid,
  Stack,
} from "@mui/material";

// import {useNavigation} from "react-router-dom";

import { ProfileBox, Styledbox } from "./account.style";
import Navbar from "../../components/Navbar/Navbar";
import CustomButton from "../../elements/customButton/customButton";
import { COLORS } from "../../Styles/theme";
import { useTheme } from "@emotion/react";

const Account = () => {
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [farmerDetails, setFarmerDetails] = useState({
    name: "",
    email: "",
  });

  const theme = useTheme();
  // const navigate = useNavigation()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(farmerDetails, "the farmer details ============>");

    // navigate('/') TODO Navigate to View profile page
  };
  const handleStateChange = () => {
    // e.preventdefault();
    setDisabled(true);
    console.log(disabled);
  };

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Stack direction="row" justifyContent="center" mt={5}>
        <ProfileBox>
          <span className="primary">
            {" "}
            <Typography variant="h4">Profile Information</Typography>
          </span>
          <Styledbox component="div">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormLabel>Name:</FormLabel>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  name="name"
                  value={farmerDetails.name}
                  type="text"
                  id="name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>Email:</FormLabel>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  name="email"
                  value={farmerDetails.email}
                  type="email"
                  id="email"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>Bio:</FormLabel>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  name="bio"
                  value="No Bio"
                  type="text"
                  id="bio"
                  maxRows={4}
                  multiline
                  rows={4}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  background={COLORS.ERIE_BLACK}
                  variant="contained"
                  onClick={disabled ? handleStateChange : handleSubmit}
                  width="100%"
                  margin={theme.spacing(3, 0, 2, 0)}
                  hoverbackground={COLORS.YELLOW_GREEN}
                >
                  Save
                </CustomButton>
              </Grid>
            </Grid>
          </Styledbox>
        </ProfileBox>
      </Stack>
    </Container>
  );
};

export default Account;
