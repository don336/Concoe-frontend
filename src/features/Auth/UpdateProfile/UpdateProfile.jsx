import React, { useEffect } from "react";
import { StyledContainer } from "./Update.style";
import UpdateProfileForm from "./UpdateProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../authService";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const yupObject = Yup.object({
    name: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });
  const { name, username, email } = authState.currentUser;
  const defaultValues = {
    name: name || "",
    username: username || "",
    email: email || "",
  };

  const handleSubmit = (values) => {
    console.log(
      "Got here",
      "===========================================================>"
    );
    const { name, username, email } = values;
    const { _id } = authState.currentUser;
    const userData = {
      id: _id,
      name,
      username,
      email,
    };
    dispatch(update(userData));
  };

  return (
    <StyledContainer maxWidth="1200px">
      <Formik
        initialValues={defaultValues}
        enableReinitialize
        validationSchema={yupObject}
        onSubmit={handleSubmit}
      >
        {(formik) => <UpdateProfileForm formik={formik} />}
      </Formik>
    </StyledContainer>
  );
};

export default EditProfile;
