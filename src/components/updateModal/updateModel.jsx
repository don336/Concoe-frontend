import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Modal } from "../../elements/modal";
import CropUpdate from "./CropUpdate.jsx";
import { UpdateCrop } from "../../features/Crop/CropServices";

export const UpdateModal = ({ open, handleClick, rowData }) => {
  const yupObject = Yup.object({
    cropType: Yup.string().required(),
    season: Yup.string().required(),
    acreage: Yup.string().required(),
    expectedYields: Yup.string().required(),
  });

  const defaultValues = {
    cropType: "",
    season: "",
    acreage: "",
    expectedYields: "",
  };

  const handleSubmit = (values) => {
    const { cropType, season, acreage, expectedYields } = values;
    const id = rowData._id;
    const CropData = {
      cropType,
      season,
      acreage,
      expectedYields,
    };
    dispatch(UpdateCrop(CropData, id));
    if (dispatch) {
      navigate("/Crops");
    }
  };
  return (
    <Modal
      open={open}
      onClose={() => handleClick()}
      width="28.1rem"
      height="30rem"
    >
      <Formik
        enableReinitialize
        validationSchema={yupObject}
        initialValues={defaultValues}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <CropUpdate
            formik={formik}
            rowData={rowData}
            handleClick={handleClick}
          />
        )}
      </Formik>
    </Modal>
  );
};

export default UpdateModal;
