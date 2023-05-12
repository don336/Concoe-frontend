import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getAllCrops } from "../CropServices";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

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

const rows = [
  { id: 1, cropType: "Coffee", acreage: 3400, yields: 35000 },
  { id: 2, cropType: "Lannister", season: "Cersei", yields: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function CropDataGrid() {
  const cropState = useSelector((state) => state.crops.crops);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCrops());
  }, []);
  return (
    <Box sx={{ height: 400, width: 800 }}>
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
