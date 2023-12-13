import React, { useState, useEffect } from "react";
import { StyledContainer } from "./Login.style";
import LoginForm from "./loginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../authService";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ActionAlerts from "../../../components/Alert/Alert";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [block, setBlock] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const authState = useSelector(state => state.auth);
  useEffect(() => {
    if (authState?.isAuthenticated) {
      setBlock(false);
      setErrorMessage("");
      navigate("/");
    }
    if (authState?.error) {
      setBlock("block");
      setErrorMessage("Invalid Log In Credentials");
      window.location.reload();
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
      <ActionAlerts text={errorMessage} display={block} />
      <Formik initialValues={defaultValues} enableReinitialize validationSchema={yupObject} onSubmit={handleSubmit}>
        {formik => <LoginForm formik={formik} />}
      </Formik>
    </StyledContainer>
  );
};

export default Registration;
