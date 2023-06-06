import * as React from "react";
import Box from "@mui/material/Box";
import { getAllCrops } from "../CropServices";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DataGridContainer } from "../../../components/dataGridContainer/index.js";
import { DataGrid } from "../../../elements/dataGrid";

const columns = [
  {
    field: "cropType",
    headerName: "Crop Type",
    width: 150,
    editable: true,
  },
  {
    field: "season",
    headerName: "Season",
    width: 150,
    editable: true,
  },
  {
    field: "Acreage",
    headerName: "Acreage",
    type: "number",
    width: 112,
    editable: true,
  },
  {
    field: "expectedYield",
    headerName: "Expected Yields",
    type: "number",
    width: 140,
    editable: true,
  },
];

// const rows = [
//   { id: 1, cropType: "Coffee", acreage: 3400, yields: 35000 },
//   { id: 2, cropType: "Lannister", season: "Cersei", yields: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function CropDataGrid() {
  const cropState = useSelector((state) => state.crops.crops);
  const Authenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Authenticated) {
      navigate("/Login");
    }
    console.log(cropState);
    dispatch(getAllCrops());
  }, []);
  const heading = [
    {
      title1: "Crops",
      title2: null,
    },
    {
      title1: "Total Acreage",
      title2: 0,
    },
  ];
  return (
    <DataGridContainer headings={heading}>
      <DataGrid
        sx={{
          color: "#fff",
        }}
        rows={cropState}
        getRowId={(cropState) => cropState._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
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
