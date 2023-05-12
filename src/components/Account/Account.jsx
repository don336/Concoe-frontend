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
} from "@mui/material";

import { ProfileBox, Styledbox, TabBox } from "./account.style";
import Navbar from "../../components/Navbar/Navbar";
import PropTypes from "prop-types";
import CustomButton from "../../elements/customButton/customButton";
import { COLORS } from "../../Styles/theme";
import { useTheme } from "@emotion/react";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const Account = () => {
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  const handleStateChange = () => {
    // e.preventdefault();
    setDisabled(true);
    console.log(disabled);
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <TabBox>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          textColor="primary"
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: { background: "#a2d729" },
          }}
          TabTextColorProps={{
            style: { color: "#a2d729" },
          }}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "#a2d729" }}
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{ color: "#fff" }} />
          <Tab
            label="Manage Account"
            {...a11yProps(1)}
            sx={{ color: "#fff" }}
          />
          <Tab label="Log Out" {...a11yProps(2)} sx={{ color: "#fff" }} />
        </Tabs>
        <TabPanel value={value} index={0}>
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
                    value="Ssemugabi Martin"
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
                    value="smgmartinez92@gmail.com"
                    type="email"
                    id="email"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </TabBox>
    </Container>
  );
};

export default Account;
