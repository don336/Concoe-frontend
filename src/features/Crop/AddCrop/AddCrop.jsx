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
import Navbar from "../../../layouts/Navbar/Navbar";
import Planting from "./Img/planting.jpg";
import { AddCrop } from "../CropServices";

const addCrop = () => {
  const [crop, setCrop] = useState({
    cropType: "",
    season: "",
    acreage: "",
    expectedYields: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector(state => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);
  const defaultValues = {
    cropType: "",
    season: "",
    acreage: "",
    expectedYields: ""
  };
  const yupObject = Yup.object({
    cropType: Yup.string().required(),
    season: Yup.string().required(),
    acreage: Yup.string().required(),
    expectedYields: Yup.string().required()
  });

  const handleSubmit = values => {
    console.log("1232323232323", "===================================>");
    const { cropType, season, acreage, expectedYields } = values;

    const CropData = {
      cropType,
      season,
      acreage,
      expectedYields
    };
    dispatch(AddCrop(CropData));
    if (dispatch) {
      navigate("/Crops");
    }
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <StyledContainer>
        <StyledBox>
          <Stack direction={"row"}>
            <Box>
              <Formik
                enableReinitialize
                initialValues={defaultValues}
                validationSchema={yupObject}
                onSubmit={handleSubmit}
              >
                {formik => <AddCrop_form formik={formik} />}
              </Formik>
            </Box>
            <Box>
              <img src={Planting} alt="planting process" width={100} className="Planting" />
            </Box>
          </Stack>
        </StyledBox>
      </StyledContainer>
    </Container>
  );
};

export default addCrop;
