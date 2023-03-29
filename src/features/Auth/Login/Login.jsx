import React, { useState, useEffect } from "react";
import { StyledContainer } from "./Login.style";
import LoginForm from "./loginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../authService";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInput;
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
    const UserData = {
      email,
      password,
    };
    dispatch(login(UserData));
  };

  return (
    <StyledContainer maxWidth="1200px">
      <LoginForm handleSumbit={handleSubmit} handleChange={handleChange} />
    </StyledContainer>
  );
};

export default Registration;
