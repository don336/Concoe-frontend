import React from "react";
import { Container, Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { StyledBox } from "./crops.style";
import CustomButton from "../../elements/customButton/customButton";
import { COLORS } from "../../Styles/theme";
import DataGridProDemo from "./CropDataGrid";

const Crops = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container>
        <StyledBox>
          <CustomButton
            fontcolor={COLORS.DARK_GREY}
            background={COLORS.YELLOW_GREEN}
            hoverbackground={COLORS.DARK_GREY}
          >
            Add Crop +
          </CustomButton>
        </StyledBox>

        <Box>
          <DataGridProDemo/>
        </Box>
      </Container>
    </Container>
  );
};

export default Crops;
