import * as React from "react";
import { Stack, Button, Box } from "@mui/material/";
// import { Delete, getAllCrops } from "../CropServices";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataGridContainer } from "../../../components/DataGridContainer/index.js";
import { DataGrid } from "../../../elements/DataGrid/DataGrid.jsx";
const columns = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 250,
    editable: true
  },
  {
    field: "quantity",
    headerName: "Quantity",
    minWidth: 300,
    editable: true
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 300,
    editable: true
  },
  {
    field: "customer",
    headerName: "Customer",
    minWidth: 250,
    editable: true
  }
];

export default function SalesDataGrid() {
  //   const cropState = useSelector(state => state.crops.crops);
  //   const editCrop = useSelector(state => state.crops.editCrop);
  //   const Authenticated = useSelector(state => state.auth.isAuthenticated);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (!Authenticated) {
  //       navigate("/Login");
  //     }
  //     if (editCrop) {
  //       dispatch(getAllCrops());
  //     }
  //     dispatch(getAllCrops());
  //   }, [editCrop]);
  const heading = [
    {
      title1: "Sales",
      title2: null
    }
  ];

  return (
    <DataGridContainer headings={heading}>
      <DataGrid
        sx={{
          color: "#fff"
        }}
        rows={[
          { id: 1, name: "React" },
          { id: 2, name: "MUI" }
        ]}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        rowHeight={2.7}
        height="27rem"
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </DataGridContainer>
  );
}
