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
import { StyledBox } from "./Login.style";
import CustomButton from "../../../elements/CustomButton/customButton";
import { COLORS } from "../../../styles/theme";
import { Form } from "formik";

const RegistrationForm = ({ formik }) => {
  const theme = useTheme();
  const { handleSubmit, values, touched, errors, handleChange } = formik;
  return (
    <Container component="main" maxWidth="xs">
      <StyledBox>
        <Typography component="h1" variant="h5" sx={{ color: "#A2D729" }}>
          <SpaOutlinedIcon /> Concoe | Coffee
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                value={values.email}
                label="Email Address"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                name="password"
                label="Password"
                type="password"
                id="password"
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
            Sign In
          </CustomButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an Account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </StyledBox>
    </Container>
  );
};

export default RegistrationForm;
