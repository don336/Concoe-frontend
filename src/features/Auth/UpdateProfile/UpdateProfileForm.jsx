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
import { HomeLink, StyledBox } from "./Update.style";
import CustomButton from "../../../elements/customButton/customButton";
import { COLORS } from "../../../Styles/theme";
import { Form } from "formik";

const UpdateForm = ({ handleSumbit, handleChange, formik }) => {
  const theme = useTheme();

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <HomeLink to="/">
          <Typography component="h1" variant="h5" sx={{ color: "#A2D729" }}>
            <SpaOutlinedIcon /> Concoe | Coffee
          </Typography>
        </HomeLink>
        <Form sx={{ mt: 3 }} onSubmit={handleSumbit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                defaultValue={formik.values.name}
                required
                fullWidth
                id="firstname"
                label="Full Name"
                autoFocus
                onChange={handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                defaultValue={formik.values.username}
                autoComplete="family-name"
                onChange={handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                defaultValue={formik.values.email}
                autoComplete="email"
                onChange={handleChange}
                autoFocus
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
            Save Update
          </CustomButton>
        </Form>
      </StyledBox>
    </Container>
  );
};

export default UpdateForm;
