import React, { useEffect } from "react";
import { StyledContainer } from "./UpdateProfile.style.js";
import UpdateProfileForm from "./UpdateProfileForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Auth/authService.js";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector(state => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const yupObject = Yup.object({
    name: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().required()
  });
  const { name, username, email } = authState.currentUser;
  const defaultValues = {
    name: name || "",
    username: username || "",
    email: email || ""
  };

  const handleSubmit = values => {
    const { name, username, email } = values;
    const { _id } = authState.currentUser;
    console.log(_id);
    const data = {
      id: _id,
      name,
      username,
      email
    };
    dispatch(update(data));
  };

  return (
    <StyledContainer maxWidth="1200px">
      <Formik initialValues={defaultValues} enableReinitialize validationSchema={yupObject} onSubmit={handleSubmit}>
        {formik => <UpdateProfileForm formik={formik} />}
      </Formik>
    </StyledContainer>
  );
};

export default EditProfile;
