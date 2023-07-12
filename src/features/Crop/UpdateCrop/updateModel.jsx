import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from '../../../elements/modal'
import CropUpdate from "./CropUpdate.jsx";
import { UpdateCrop } from "../CropServices.js";


export const UpdateModal = ({ open, handleClick, rowData, setOpen }) => {
  const {cropType, season, acreage, expectedYields, _id} = rowData
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const yupObject = Yup.object({
    cropType: Yup.string().required(),
    season: Yup.string().required(),
    acreage: Yup.string().required(),
    expectedYields: Yup.string().required(),
  });

  const defaultValues = {
    cropType: cropType || "",
    season: season || "",
    acreage: acreage || "",
    expectedYields: expectedYields || "",
  };

  const handleSubmit = (values) => {
    console.log(_id, 'got here ===============================>');
    const { cropType, season, acreage, expectedYields } = values;
    const CropData = {
      cropType,
      season,
      acreage,
      expectedYields,
      cropId: _id
    };
    dispatch(UpdateCrop(CropData));
    setOpen(false)
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
