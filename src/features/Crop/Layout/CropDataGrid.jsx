import * as React from "react";
import { Stack, Button, Box } from "@mui/material/";
import { getAllCrops } from "../CropServices";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataGridContainer } from "../../../components/dataGridContainer/index.js";
import { DataGrid } from "../../../elements/dataGrid";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { COLORS } from "../../../Styles/theme";
import UpdateModal from "../../../components/Models/UpdateModels/UpdateModels";

const rendercell = (params) => {
  const [open, setOpen] = useState(false);
  const [rowData, setRowData] = useState({});

  const handleOpen = (e) => {
    setOpen(true);
    const currentRow = params.row;
    const data = JSON.stringify(currentRow, null, 4);
    setRowData(data);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleOpen}
          sx={{
            border: "none",
          }}
        >
          <CreateIcon />
        </Button>
        <Button
          variant="outlined"
          size="small"
          // onClick={onClick}
          sx={{
            border: "none",
            color: COLORS.LIGHT_RED,
          }}
        >
          <DeleteIcon />
        </Button>
      </Stack>
      <UpdateModal open={open} handleClose={handleClose} data={rowData} />
    </Box>
  );
};
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
    field: "acreage",
    headerName: "Acreage",
    type: "number",
    width: 112,
    editable: true,
  },
  {
    field: "expectedYields",
    headerName: "Expected Yields",
    type: "number",
    width: 140,
    editable: true,
  },
  {
    field: "Erasure",
    width: 170,
    editable: false,
    renderCell: rendercell,
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
