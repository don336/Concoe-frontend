import React, { useState, useEffect } from "react";
import { StyledContainer } from "./registrationStyles";
import RegistrationForm from "./registrationForm";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../authService";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const defaultValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const yupObject = Yup.object({
    name: Yup.string()
      .max(15, "Must not be more than 15 characters")
      .required(),
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);

  const handleSubmit = (values) => {
    const { name, username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const UserData = {
        name,
        username,
        email,
        password,
      };
      dispatch(register(UserData));
    }
  };

  return (
    <StyledContainer maxWidth="1200px">
      <Formik
        initialValues={defaultValues}
        validationSchema={yupObject}
        onSubmit={handleSubmit}
      >
        {(formik) => <RegistrationForm formik={formik} />}
      </Formik>
    </StyledContainer>
  );
};

export default Registration;
