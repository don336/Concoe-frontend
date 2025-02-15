import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../styles/theme";
import { useSelector } from "react-redux";
import Navbar from "../../layouts/Navbar/Navbar";
import CustomButton from "../../elements/CustomButton/customButton";
import SalesDataGrid from "./SalesFeature/SalesDataTable";
import { NavLink } from "./Sales.style";

const Sales = () => {
  const [isCustomer, setIsCustomer] = useState(false);
  const Authenticated = useSelector(state => state.auth.isAuthenticated);
  const userEmail = useSelector(state => state.auth.currentUser.email);
  const Customers = useSelector(state => state.customer.customers);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Authenticated) {
      navigate("/login");
    }
    if (Customers.length) {
      Customers.map(customer => {
        if (customer.email === userEmail) {
          setIsCustomer(true);
          localStorage.setItem("customerId", customer.customerId);
          return customer;
        } else {
          setIsCustomer(false);
          navigate("/customer-registration");
        }
      });
    }
  }, [Authenticated, userEmail, Customers]);
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
