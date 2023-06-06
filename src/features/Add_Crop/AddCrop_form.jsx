import React from "react";
import {
  Box,
  Grid,
  TextField,
  useTheme,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Form } from "formik";
import CustomButton from "../../elements/customButton/customButton";

import { COLORS } from "../../Styles/theme";

const AddCrop_form = ({ handleChange, formik, handleSubmit }) => {
  const theme = useTheme();
  // const handleSubmit = (values, e) => {
  //   // const { CropType, Season, Acreage, ExpectedYields } = values;
  //   // if (!CropType || !Season || !Acreage || !ExpectedYields) {
  //   //   toast.error("Please fill all required Field");
  //   // } else {
  //   //   const CropData = {
  //   //     CropType,
  //   //     Season,
  //   //     Acreage,
  //   //     ExpectedYields,
  //   //   };
  //   //   dispatch(register(UserData));
  //   // }
  //   console.log("1232323232323", "===================================>");
  // };
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        height: "100%",
      }}
    >
      <CssBaseline />
      <Typography textAlign={"center"} variant="h4" color={COLORS.YELLOW_GREEN}>
        Add Crop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete="plant-name"
            name={formik.values.CropType}
            required
            fullWidth
            id={formik.values.CropType}
            error={formik.touched.CropType && Boolean(formik.errors.CropType)}
            helperText={formik.touched.CropType && formik.errors.CropType}
            label="Crop Type"
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            id={formik.values.Season}
            label="Season"
            name={formik.values.Season}
            autoComplete="Season"
            onChange={handleChange}
            error={formik.touched.Season && Boolean(formik.errors.Season)}
            helperText={formik.touched.Season && formik.errors.Season}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id={formik.values.Acreage}
            label="Acreage"
            name={formik.values.Acreage}
            autoComplete="Acreage"
            onChange={handleChange}
            error={formik.touched.Acreage && Boolean(formik.errors.Acreage)}
            helperText={formik.touched.Acreage && formik.errors.Acreage}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name={formik.values.ExpectedYields}
            label="Expected Yields"
            type="text"
            id={formik.values.ExpectedYields}
            autoComplete="ExpectedYields"
            onChange={handleChange}
            error={
              formik.touched.ExpectedYields &&
              Boolean(formik.errors.ExpectedYields)
            }
            helperText={
              formik.touched.ExpectedYields && formik.errors.ExpectedYields
            }
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
