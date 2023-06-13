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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, username, email, password, confirmPassword } = userInput;
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

  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const UserData = {
        name,
        username,
        email,
        password,
      };
      console.log(UserData);
      dispatch(register(UserData));
    }
  };

  return (
    <StyledContainer maxWidth="1200px">
      <Formik initialValues={defaultValues} validationSchema={yupObject}>
        {(formik) => (
          <RegistrationForm
            formik={formik}
            handleSumbit={handleSubmit}
            handleChange={handleChange}
          />
        )}
      </Formik>
    </StyledContainer>
  );
};

export default Registration;
