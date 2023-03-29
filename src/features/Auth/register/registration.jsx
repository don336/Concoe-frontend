import React, { useState, useEffect } from "react";
import { StyledContainer } from "./registrationStyles";
import RegistrationForm from "./registrationForm";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, username, email, password, confirmPassword } = userInput;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = () => {
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
      <RegistrationForm
        handleSumbit={handleSubmit}
        handleChange={handleChange}
      />
    </StyledContainer>
  );
};

export default Registration;
