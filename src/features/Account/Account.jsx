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

// import {useNavigation} from "react-router-dom";

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
            <Typography variant="h4" textAlign={"center"}>
              User Information
            </Typography>
          </span>
          <Styledbox component="div">
            <Profbox>
              <StyledAvatar>
                <AccountCircleIcon />
              </StyledAvatar>
              <StyledTypography>Ssemugabi Martin</StyledTypography>
              <StyledTypography>smgmartinez92@gmail.com</StyledTypography>

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
