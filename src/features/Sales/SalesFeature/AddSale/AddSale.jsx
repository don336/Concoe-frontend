import React from "react";
import { useEffect, useState } from "react";
import SalesForm from "./SalesForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack, Box } from "@mui/material";
import { StyledBox, StyledContainer } from "./sales.style.js";
import Navbar from "../../../../layouts/Navbar/Navbar";
import { addSale } from "../SaleService.js";

const AddSaleFeature = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector(state => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const defaultValues = {
    name: "",
    quantity: "",
    price: ""
  };
  const yupObject = Yup.object({
    name: Yup.string().required(),
    quantity: Yup.string().required(),
    price: Yup.string().required()
  });

  const handleSubmit = values => {
    const { name, quantity, price } = values;

    const saleData = {
      name,
      quantity,
      price
    };
    dispatch(addSale(saleData));
    if (dispatch) {
      navigate("/Sales");
    }
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <StyledContainer>
        <StyledBox>
          <Stack direction={"row"}>
            <Box>
              <Formik
                enableReinitialize
                initialValues={defaultValues}
                validationSchema={yupObject}
                onSubmit={handleSubmit}
              >
                {formik => <SalesForm formik={formik} />}
              </Formik>
            </Box>
          </Stack>
        </StyledBox>
      </StyledContainer>
    </Container>
  );
};

export default AddSaleFeature;
