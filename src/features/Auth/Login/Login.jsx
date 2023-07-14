import React, { useState, useEffect } from "react";
import { StyledContainer } from "./Login.style";
import LoginForm from "./loginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../authService";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector(state => state.auth);
  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const defaultValues = { email: "", password: "" };
  const yupObject = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
  });
  const handleSubmit = values => {
    const { email, password } = values;
    const UserData = {
      email,
      password
    };

    dispatch(login(UserData));
  };

  return (
    <StyledContainer maxWidth="1200px">
      <Formik initialValues={defaultValues} enableReinitialize validationSchema={yupObject} onSubmit={handleSubmit}>
        {formik => <LoginForm formik={formik} />}
      </Formik>
    </StyledContainer>
  );
};

export default Registration;
