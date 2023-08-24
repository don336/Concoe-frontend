import React from "react";
import { Box, Grid, TextField, useTheme, Typography, CssBaseline } from "@mui/material";
import { Form } from "formik";
import CustomButton from "../../../elements/CustomButton/customButton";

import { COLORS } from "../../../styles/theme";

const AddCrop_form = ({ formik }) => {
  const theme = useTheme();
  const { handleSubmit, handleChange, errors, touched, values } = formik;
  const inputStyles = {
    color: "white",
    border: " 1px solid #444",
    borderRadius: "8px"
  };
  const labelStyles = {
    color: "#fff"
  };
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#2F4550",
        padding: "20px",
        height: "100%"
      }}
    >
      <CssBaseline />
      <Typography textAlign={"center"} variant="h4" color={COLORS.WHITE}>
        <span className="primary">Add</span> Crop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            autoComplete="plant-name"
            name="cropType"
            value={values.cropType}
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
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            fullWidth
            id="season"
            label="Season"
            value={values.season}
            name="season"
            autoComplete="Season"
            onChange={handleChange}
            error={touched.Season && Boolean(errors.Season)}
            helperText={touched.Season && errors.Season}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            fullWidth
            id="acreage"
            label="Acreage"
            value={values.acreage}
            name="acreage"
            autoComplete="Acreage"
            onChange={handleChange}
            error={touched.Acreage && Boolean(errors.Acreage)}
            helperText={touched.Acreage && errors.Acreage}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            fullWidth
            name="expectedYields"
            label="Expected Yields"
            value={values.expectedYields}
            type="text"
            id="expectedYields"
            autoComplete="ExpectedYields"
            onChange={handleChange}
            error={touched.ExpectedYields && Boolean(errors.ExpectedYields)}
            helperText={touched.ExpectedYields && errors.ExpectedYields}
          />
        </Grid>
      </Grid>
      <CustomButton
        type="submit"
        background={COLORS.ERIE_BLACK}
        variant="contained"
        width="100%"
        margin={theme.spacing(3, 0, 2, 0)}
        hoverbackground={COLORS.YELLOW_GREEN}
      >
        Add Crop
      </CustomButton>
    </Form>
  );
};

export default AddCrop_form;
