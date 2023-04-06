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

const RegistrationForm = ({ handleSumbit, handleChange, formik }) => {
  const theme = useTheme();

  return (
    <Container component="main" maxWidth="xs">
      <StyledBox>
        <Typography component="h1" variant="h5" sx={{ color: "#A2D729" }}>
          <SpaOutlinedIcon /> Concoe | Coffee
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name={formik.values.name}
                required
                fullWidth
                id={formik.values.name}
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
                id={formik.values.username}
                label="Username"
                name={formik.values.username}
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
                id={formik.values.email}
                label="Email Address"
                name={formik.values.email}
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name={formik.values.password}
                label="Password"
                type="password"
                id={formik.values.password}
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name={formik.values.confirmPassword}
                label="Confirm Password"
                type="password"
                id={formik.values.confirmPassword}
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <CustomButton
            background={COLORS.ERIE_BLACK}
            variant="contained"
            onClick={handleSumbit}
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
        </Box>
      </StyledBox>
    </Container>
  );
};

export default RegistrationForm;
