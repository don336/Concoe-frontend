import React from "react";
import { Grid, TextField, useTheme, Typography, CssBaseline } from "@mui/material";
import { Form } from "formik";
import CustomButton from "../../../../elements/CustomButton/customButton";

import { COLORS } from "../../../../styles/theme";

const Add_Sale = ({ formik }) => {
  const theme = useTheme();
  const { handleSubmit, handleChange, errors, touched, values } = formik;
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
        Add Sale
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete="name"
            name="name"
            value={values.name}
            fullWidth
            id="name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            label="Name"
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="quantity"
            label="Quantity"
            value={values.quantity}
            name="quantity"
            autoComplete="quantity"
            onChange={handleChange}
            error={touched.quantity && Boolean(errors.quantity)}
            helperText={touched.quantity && errors.quantity}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="price"
            label="Price"
            value={values.price}
            name="price"
            autoComplete="price"
            onChange={handleChange}
            error={touched.price && Boolean(errors.price)}
            helperText={touched.price && errors.price}
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
        Add Sale
      </CustomButton>
    </Form>
  );
};

export default Add_Sale;
