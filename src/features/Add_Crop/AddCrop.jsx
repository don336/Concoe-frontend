import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import AddCrop_form from "./AddCrop_form";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack, Box, Grid, TextField } from "@mui/material";
import { StyledBox, StyledContainer } from "./AddCrop.style";
import Navbar from "../../components/Navbar/Navbar";
import Planting from "./Img/planting.jpg";
import CustomButton from "../../elements/customButton/customButton";
const AddCrop = () => {
  const defaultValues = {
    CropType: "",
    Season: "",
    Acreage: "",
    ExpectedYields: "",
  };
  const yupObject = Yup.object({
    CropType: Yup.string()
      .max(15, "Must not be more than 15 characters")
      .required(),
    Season: Yup.string().required(),
    Acreage: Yup.string().email().required(),
    ExpectedYields: Yup.string().required(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);

  const handleSubmit = (values) => {
    // const { CropType, Season, Acreage, ExpectedYields } = values;
    // if (!CropType || !Season || !Acreage || !ExpectedYields) {
    //   toast.error("Please fill all required Field");
    // } else {
    //   const CropData = {
    //     CropType,
    //     Season,
    //     Acreage,
    //     ExpectedYields,
    //   };
    //   dispatch(register(UserData));
    // }
    console.log("1232323232323", "===================================>");
  };
  return (
    <Container maxWidth="xl" sx={{ padding: "30px" }}>
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
                  <AddCrop_form formik={formik} handleSubmit={handleSubmit} />
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

export default AddCrop;
