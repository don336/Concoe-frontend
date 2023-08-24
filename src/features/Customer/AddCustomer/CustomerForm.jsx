import React from "react";
import { Stack, Grid, TextField, useTheme, CssBaseline } from "@mui/material";

import CustomButton from "../../../elements/CustomButton/customButton";
import { COLORS } from "../../../styles/theme";
import { StyledForm } from "./AddCustomer.style";
const CustomerForm = ({ formik }) => {
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
    <StyledForm onSubmit={handleSubmit}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} mb={3}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            ml={5}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: "100%"
            }}
          >
            <Grid item xs={12} sm={12}>
              <TextField
                inputProps={{ style: inputStyles }}
                InputLabelProps={{ style: labelStyles }}
                autoComplete="firstname"
                name="firstname"
                value={values.firstname}
                fullWidth
                size="small"
                id="firstname"
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={touched.firstname && errors.firstname}
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                size="small"
                inputProps={{ style: inputStyles }}
                InputLabelProps={{ style: labelStyles }}
                fullWidth
                id="lastname"
                label="Last Name"
                value={values.lastname}
                name="lastname"
                autoComplete="Last Name"
                onChange={handleChange}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} mb={3}>
          <TextField
            size="small"
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            fullWidth
            id="email"
            label="Email"
            value={values.email}
            name="email"
            autoComplete="email"
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          <TextField
            size="small"
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            fullWidth
            name="phone"
            label="Phone"
            value={values.phone}
            type="text"
            id="phone"
            autoComplete="phone"
            onChange={handleChange}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          <TextField
            size="small"
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            fullWidth
            name="dateOfBirth"
            value={values.dateOfBirth}
            type="date"
            id="dateOfBirth"
            autoComplete="dateOfBirth"
            onChange={handleChange}
            error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
            helperText={touched.dateOfBirth && errors.dateOfBirth}
          />
        </Grid>
      </Grid>
      <CustomButton
        type="submit"
        background={COLORS.YELLOW_GREEN}
        variant="contained"
        width="100%"
        margin={theme.spacing(3, 0, 2, 0)}
        hoverbackground={COLORS.LIGHT_GREEN}
      >
        Save
      </CustomButton>
    </StyledForm>
  );
};

export default CustomerForm;
