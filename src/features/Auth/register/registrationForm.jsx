import * as React from "react";
import {
  Button,
  Container,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { StyledBox } from "./registrationStyles";
import CustomButton from "../../../elements/customButton/customButton";
import { COLORS } from "../../../Styles/theme";
import { Form } from "formik";

const RegistrationForm = ({ handleSumbit, handleChange, formik }) => {
  const theme = useTheme();

  return (
    <Container component="main" maxWidth="xs">
      <StyledBox>
        <Typography component="h1" variant="h5" sx={{ color: "#A2D729" }}>
          <SpaOutlinedIcon /> Concoe | Coffee
        </Typography>
        <Form sx={{ mt: 3 }} component="form" onSubmit={handleSumbit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                onChange={handleChange}
              />
              {formik.errors.name ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: "red",
                  }}
                >
                  {formik.errors.name}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="family-name"
                onChange={handleChange}
              />
              {formik.errors.name ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: "red",
                  }}
                >
                  {formik.errors.name}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="newpassword"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <CustomButton
            background={COLORS.ERIE_BLACK}
            variant="contained"
            type="submit"
            width="100%"
            margin={theme.spacing(3, 0, 2, 0)}
            hoverbackground={COLORS.YELLOW_GREEN}
          >
            Sign Up
          </CustomButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </StyledBox>
    </Container>
  );
};

export default RegistrationForm;
