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
  Avatar,
} from "@mui/material";

import { useNavigation } from "react-router-dom";

import {
  ActionBox,
  Profbox,
  ProfileBox,
  StyledAvatar,
  StyledLink,
  StyledTypography,
  Styledbox,
} from "./account.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from "../../components/Navbar/Navbar";
import CustomButton from "../../elements/customButton/customButton";
import { COLORS } from "../../Styles/theme";
import { useDispatch, useSelector } from "react-redux";
// import { reset } from "../Auth/authSlice";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const { name, email, username } = authState.currentUser;
  // const handleLogOut = () => {
  //   dispatch(reset);
  // };
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
                <StyledLink to="/Account/update-account">
                  <CustomButton
                    background={COLORS.DARK_GREY}
                    hoverbackground={COLORS.YELLOW_GREEN}
                    fontcolor={COLORS.LIGHT}
                    hovercolor={COLORS.DARK_GREY}
                  >
                    Edit Profile
                  </CustomButton>
                </StyledLink>
                <CustomButton
                  background={COLORS.DANGER}
                  hoverbackground={COLORS.RED}
                >
                  Delete Account
                </CustomButton>
              </ActionBox>
              <Box>
                <CustomButton
                  // onClick={handleLogOut}
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

export default Account;
