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
import { DeleteModal } from "../../../components/deleteModal/index.js";

const rendercell = (params) => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    const currentRow = params.row;
    const data = JSON.stringify(currentRow, null, 4);
    setRowData(data);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async (id) => {
    dispatch(deleteClient(id));
    setOpenDelete(false);
  };

  const crop = params.row.cropType;

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
          <DeleteIcon onClick={() => setOpenDelete(true)} />
        </Button>
      </Stack>
      <UpdateModal open={open} handleClose={handleClose} rowData={params.row} />
      {openDelete && (
        <DeleteModal
          open={openDelete}
          handleClick={() => setOpenDelete(false)}
          title={crop}
          handleRemoveClick={() => handleDelete(id)}
          subtitle={crop}
        />
      )}
    </Box>
  );
};
const columns = [
  {
    field: "cropType",
    headerName: "Crop Type",
    minWidth: 200,
    editable: true,
  },
  {
    field: "season",
    headerName: "Season",
    minWidth: 200,
    editable: true,
  },
  {
    field: "acreage",
    headerName: "Acreage",
    minWidth: 200,
    editable: true,
  },
  {
    field: "expectedYields",
    headerName: "Expected Yields",
    minWidth: 200,
    editable: true,
  },
  {
    field: "Action",
    minWidth: 200,
    editable: false,
    renderCell: rendercell,
  },
];

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
