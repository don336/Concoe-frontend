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
import CustomButton from "../../../elements/customButton/customButton";
import { COLORS } from "../../../Styles/theme";

const RegistrationForm = ({ handleSumbit, handleChange }) => {
  const theme = useTheme();
  return (
    <Container component="main" maxWidth="xs">
      <StyledBox>
        <Typography component="h1" variant="h5" sx={{ color: "#A2D729" }}>
          <SpaOutlinedIcon /> Concoe | Coffee
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
          </Grid>
          <CustomButton
            background={COLORS.ERIE_BLACK}
            variant="contained"
            onClick={handleSumbit}
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
        </Box>
      </StyledBox>
    </Container>
  );
};

export default RegistrationForm;
