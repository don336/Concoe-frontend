import { Container, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../styles/theme";
import { useSelector } from "react-redux";
import Navbar from "../../layouts/Navbar/Navbar";
import CustomButton from "../../elements/CustomButton/customButton";
import SalesDataGrid from "./Sales Features/SalesDataTable";
import { NavLink } from "./Sales.style";

const Sales = () => {
  const Authenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Authenticated) {
      navigate("/login");
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container>
        <NavLink to="/Sales/add-sale">
          <CustomButton
            fontcolor={COLORS.DARK_GREY}
            background={COLORS.YELLOW_GREEN}
            hoverbackground={COLORS.DARK_GREY}
            // onClick={handleDisplay}
          >
            Add Sale +
          </CustomButton>
        </NavLink>
        <Box>
          <SalesDataGrid />
        </Box>
      </Container>
    </Container>
  );
};

export default Sales;
