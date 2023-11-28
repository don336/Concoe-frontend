import React from "react";
import { Box, Grid, TextField, useTheme, Typography, CssBaseline } from "@mui/material";
import { Form } from "formik";
import { Stack } from "@mui/material";
import { COLORS } from "../../../styles/theme.jsx";
import { StyledStack, StyledTypography } from "./updateModel.style.js";
import CustomButton from "../../../elements/CustomButton/customButton.jsx";

const CropUpdate = ({ formik, handleClick }) => {
  const { handleSubmit, handleChange, errors, touched, values } = formik;
  const { cropType, season, acreage, expectedYields } = values;
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        height: "100%"
      }}
    >
      <CssBaseline />
      <Typography textAlign={"center"} variant="h4" color={COLORS.YELLOW_GREEN}>
        Update Crop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete="plant-name"
            name="cropType"
            defaultValue={cropType || ""}
            fullWidth
            id="cropType"
            error={touched.CropType && Boolean(errors.CropType)}
            helperText={touched.CropType && errors.CropType}
            label="Crop Type"
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="season"
            label="Season"
            defaultValue={season || ""}
            name="season"
            autoComplete="Season"
            onChange={handleChange}
            error={touched.Season && Boolean(errors.Season)}
            helperText={touched.Season && errors.Season}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="acreage"
            label="Acreage"
            defaultValue={acreage || ""}
            name="acreage"
            autoComplete="Acreage"
            onChange={handleChange}
            error={touched.Acreage && Boolean(errors.Acreage)}
            helperText={touched.Acreage && errors.Acreage}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="expectedYields"
            label="Expected Yields"
            defaultValue={expectedYields || ""}
            type="text"
            id="expectedYields"
            autoComplete="ExpectedYields"
            onChange={handleChange}
            error={touched.ExpectedYields && Boolean(errors.ExpectedYields)}
            helperText={touched.ExpectedYields && errors.ExpectedYields}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledStack>
            <Stack spacing={2.5} direction="row" mt={3.3} mb={4} justifyContent="space-evenly">
              <CustomButton width="4.37rem" onClick={() => handleClick()} border="none">
                <Typography variant="w11" color={COLORS.LIGHT_RED}>
                  Cancel
                </Typography>
              </CustomButton>
              <CustomButton
                type="submit"
                width="6.62rem"
                background={COLORS.YELLOW_GREEN}
                hoverbackground={COLORS.LIGHT_GREEN}
                border={`0.063 solid ${COLORS.YELLOW_GREEN}`}
              >
                <StyledTypography variant="w11" color={COLORS.WHITE}>
                  Save
                </StyledTypography>
              </CustomButton>
            </Stack>
          </StyledStack>
        </Grid>
      </Grid>
    </Form>
  );
};

export default CropUpdate;
