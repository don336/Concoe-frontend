import * as React from "react";
import { Button, Container, TextField, Link, Grid, Box, Typography, useTheme } from "@mui/material";

import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { HomeLink, StyledBox } from "./UpdateProfile.style.js";
import CustomButton from "../../../elements/CustomButton/customButton.jsx";
import { COLORS } from "../../../styles/theme.jsx";
import { Form } from "formik";
import { Link as BackLink } from "react-router-dom";

const UpdateForm = ({ formik }) => {
  const theme = useTheme();
  const { handleChange, handleSubmit, errors, touched, values } = formik;
  const { name, username, email } = values;
  return (
    <Container maxWidth="xs">
      <StyledBox>
        <BackLink
          to="/ViewProfile"
          style={{
            textDecoration: "none",
            color: COLORS.YELLOW_GREEN
          }}
        >
          <ArrowBack />
        </BackLink>
        <HomeLink to="/">
          <Typography component="h1" variant="h5" sx={{ color: "#A2D729" }}>
            <SpaOutlinedIcon /> Concoe | Coffee
          </Typography>
        </HomeLink>
        <Form sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                defaultValue={name || ""}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="username"
                label="Username"
                name="username"
                defaultValue={username || ""}
                autoComplete="family-name"
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                defaultValue={email || ""}
                autoComplete="email"
                onChange={handleChange}
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
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
            Save Update
          </CustomButton>
        </Form>
      </StyledBox>
    </Container>
  );
};

export default UpdateForm;
