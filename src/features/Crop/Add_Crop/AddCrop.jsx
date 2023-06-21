import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddCrop_form from "./AddCrop_form";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack, Box } from "@mui/material";
import { StyledBox, StyledContainer } from "./AddCrop.style";
import Navbar from "../../../components/Navbar/Navbar";
import Planting from "./Img/planting.jpg";
import { AddCrop } from "../CropServices";

const addCrop = () => {
  const [crop, setCrop] = useState({
    cropType: "",
    season: "",
    acreage: "",
    expectedYields: "",
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
    cropType: "",
    season: "",
    acreage: "",
    expectedYields: "",
  };
  const yupObject = Yup.object({
    cropType: Yup.string()
      .max(15, "Must not be more than 15 characters")
      .required(),
    season: Yup.string().required(),
    acreage: Yup.string().required(),
    expectedYields: Yup.string().required(),
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrop((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { cropType, season, acreage, expectedYields } = crop;

    const CropData = {
      cropType,
      season,
      acreage,
      expectedYields,
    };
    dispatch(AddCrop(CropData));
    if (dispatch) {
      navigate("/Crops");
    }
    console.log("1232323232323", "===================================>");
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <StyledContainer>
        <StyledBox>
          <Stack direction={"row"}>
            <Box>
              <Formik
                initialValues={defaultValues}
                validationSchema={yupObject}
              >
                {(formik) => (
                  <AddCrop_form
                    formik={formik}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                  />
                )}
              </Formik>
            </Box>
            <Box>
              <img
                src={Planting}
                alt="planting process"
                width={100}
                className="Planting"
              />
            </Box>
          </Stack>
        </StyledBox>
      </StyledContainer>
    </Container>
  );
};

export default addCrop;
