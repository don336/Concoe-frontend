import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Tabs, Tab, FormLabel, TextField, Grid, Stack, Avatar } from "@mui/material";

import { useNavigation } from "react-router-dom";

import { ActionBox, Profbox, ProfileBox, StyledAvatar, StyledLink, StyledTypography, Styledbox } from "./View.style.js";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from "../../../layouts/Navbar/Navbar.jsx";
import CustomButton from "../../../elements/CustomButton/customButton.jsx";
import { COLORS } from "../../../styles/theme.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../../Auth/authService.js";
import { useNavigate } from "react-router-dom";
import { handleLogOut } from "../../../utils/handleLogout.js";
const ViewProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const { name, email, username } = authState.currentUser;
  const handleDelete = () => {
    const id = authState.currentUser._id;
    dispatch(Delete(id));
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Stack direction="row" justifyContent="center" mt={5}>
        <ProfileBox>
          <span className="primary">
            {" "}
            <Typography variant="h4" textAlign={"center"}>
              User Information
            </Typography>
          </span>
          <Styledbox component="div">
            <Profbox>
              <StyledAvatar>
                <AccountCircleIcon />
              </StyledAvatar>
              <StyledTypography>Full Name: {name}</StyledTypography>
              <StyledTypography>Username: {username}</StyledTypography>
              <StyledTypography>Email: {email}</StyledTypography>

              <ActionBox direction={"row"} spacing={2}>
                <StyledLink to="/ViewProfile/update-account">
                  <CustomButton
                    background={COLORS.DARK_GREY}
                    hoverbackground={COLORS.YELLOW_GREEN}
                    fontcolor={COLORS.LIGHT}
                    hovercolor={COLORS.DARK_GREY}
                  >
                    Edit ViewProfile
                  </CustomButton>
                </StyledLink>
                <CustomButton onClick={handleDelete} background={COLORS.DANGER} hoverbackground={COLORS.RED}>
                  Delete ViewProfile
                </CustomButton>
              </ActionBox>
              <Box>
                <CustomButton
                  onClick={() => {
                    handleLogOut();
                  }}
                  background={COLORS.LIGHT_GREEN}
                  hoverbackground={COLORS.YELLOW_GREEN}
                  fontcolor={COLORS.DARK_GREY}
                  width={"100%"}
                >
                  Log Out
                </CustomButton>
              </Box>
            </Profbox>
          </Styledbox>
        </ProfileBox>
      </Stack>
    </Container>
  );
};

export default ViewProfile;
