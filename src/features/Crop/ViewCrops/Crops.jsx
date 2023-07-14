import React, { useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";
import Navbar from "../../../layouts/Navbar/Navbar";
import {
  StyledBox,
  WeatherBox,
  StyledTypography,
  CropLink,
} from "./crops.style";
import CustomButton from "../../../elements/CustomButton/customButton";
import { COLORS } from "../../../styles/theme";
import CropDataGrid from "./CropDataGrid";

const Crops = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container>
        <StyledBox>
          <CropLink to="/Crops/add-crop">
            <CustomButton
              fontcolor={COLORS.DARK_GREY}
              background={COLORS.YELLOW_GREEN}
              hoverbackground={COLORS.DARK_GREY}
              // onClick={handleDisplay}
            >
              Add Crop +
            </CustomButton>
          </CropLink>
          <Box>
            <CropDataGrid />
          </Box>
        </StyledBox>
      </Container>
    </Container>
  );
};

export default Crops;
