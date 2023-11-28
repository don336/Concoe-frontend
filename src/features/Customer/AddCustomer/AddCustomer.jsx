import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Stack } from "@mui/material";
import Navbar from "../../../layouts/Navbar/Navbar";
import CustomerForm from "./CustomerForm";
import { StyledTypography1, StyledWelcomeBox } from "./AddCustomer.style";
import { getAllCustomers, addCustomer } from "../Customerservice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const AddCustomer = () => {
  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dateOfBirth: ""
  };
  const yupObject = Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required(),
    phone: Yup.string().required(),
    dateOfBirth: Yup.string().required()
  });
  const Authenticated = useSelector(state => state.auth.isAuthenticated);
  const userEmail = useSelector(state => state.auth.currentUser.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Authenticated) {
      navigate("/login");
    }
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);
  const handleSubmit = values => {
    const { firstname, lastname, email, phone, dateOfBirth } = values;
    const customerData = {
      firstname,
      lastname,
      email,
      phone,
      dateOfBirth
    };
    if (userEmail === email) {
      dispatch(addCustomer(customerData));
      if (dispatch) {
        navigate("/Sales");
      }
    } else {
      navigate("/customer-registration");
    }
  };

  return (
    <Container>
      <Navbar />
      <Stack direction="row" spacing={2} mt={13}>
        <StyledWelcomeBox>
          <StyledTypography1 variant="h3">
            <span className="primary">Welcome</span> to our community!
          </StyledTypography1>
          <StyledTypography1 variant="h6">
            Join us and become part of something special. Access exclusive benefits by registering for a personalized
            shopping experience. Empower yourself and unlock a world of possibilities with your account. Start your
            exciting journey by signing up and discover what awaits you after registration. Stay connected with us by
            registering for your free membership today.
          </StyledTypography1>
          <StyledTypography1 variant="h6">
            Elevate your experience through registration and upgrade your access with a quick sign-up. Join our growing
            family of users and receive tailored offers by signing up. Enjoy a seamless shopping experience and stay
            informed about the latest updates by creating an account. Stay ahead of the curve with an account and
            simplify your experience. Get started on your journey with us and be part of something bigger by
            registering.
          </StyledTypography1>
        </StyledWelcomeBox>
        <Formik enableReinitialize initialValues={defaultValues} validationSchema={yupObject} onSubmit={handleSubmit}>
          {formik => <CustomerForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
};

export default AddCustomer;
