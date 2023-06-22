import React, { useState, useEffect } from "react";
import { StyledContainer } from "./Update.style";
import UpdateProfileForm from "./UpdateProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../authService";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
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
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);

  const defaultValues = {
    name: authState.currentUser.name || "",
    username: authState.currentUser.username || "",
    email: authState.currentUser.email || "",
  };
  const [userInput, setUserInput] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email } = userInput;

    const UserData = {
      id: authState.currentUser._id,
      name,
      username,
      email,
    };
    dispatch(update(UserData));

    console.log(
      "Updaated values",
      "===========================================================>"
    );
    // }
  };

  return (
    <StyledContainer maxWidth="1200px">
      <Formik initialValues={defaultValues} validationSchema={yupObject}>
        {(formik) => (
          <UpdateProfileForm
            formik={formik}
            handleSumbit={handleSubmit}
            handleChange={handleChange}
          />
        )}
      </Formik>
    </StyledContainer>
  );
};

export default EditProfile;
