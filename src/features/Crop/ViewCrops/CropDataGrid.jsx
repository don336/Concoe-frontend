import * as React from "react";
import { Stack, Button, Box } from "@mui/material/";
import { Delete, getAllCrops } from "../CropServices";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataGridContainer } from "../../../components/DataGridContainer/index.js";
import { DataGrid } from "../../../elements/DataGrid/DataGrid";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { COLORS } from "../../../styles/theme";
import UpdateModal from "../UpdateCrop/updateModel.jsx";
import { DeleteModal } from "../../../components/DeleteModal/index.js";

const rendercell = params => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = e => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    const id = params.row._id;
    dispatch(Delete(id));
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
            color: COLORS.YELLOW_GREEN
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
            color: COLORS.LIGHT_RED
          }}
        >
          <DeleteIcon onClick={() => setOpenDelete(true)} />
        </Button>
      </Stack>
      <UpdateModal
        open={open}
        handleClick={() => {
          setOpen(false);
        }}
        rowData={params.row}
        setOpen={setOpen}
      />
      {openDelete && (
        <DeleteModal
          open={openDelete}
          handleClick={() => setOpenDelete(false)}
          title={crop}
          handleRemoveClick={() => handleDelete()}
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
    editable: true
  },
  {
    field: "season",
    headerName: "Season",
    minWidth: 200,
    editable: true
  },
  {
    field: "acreage",
    headerName: "Acreage",
    minWidth: 200,
    editable: true
  },
  {
    field: "expectedYields",
    headerName: "Expected Yields",
    minWidth: 200,
    editable: true
  },
  {
    field: "Action",
    minWidth: 200,
    editable: false,
    renderCell: rendercell
  }
];

export default function CropDataGrid() {
  const cropState = useSelector(state => state.crops.crops);
  const editCrop = useSelector(state => state.crops.editCrop);
  const Authenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Authenticated) {
      navigate("/Login");
    }
    if (editCrop) {
      dispatch(getAllCrops());
    }
    dispatch(getAllCrops());
  }, [editCrop]);
  const heading = [
    {
      title1: "Crops",
      title2: null
    },
    {
      title1: "Total Acreage",
      title2: 0
    }
  ];

  return (
    <DataGridContainer headings={heading}>
      <DataGrid
        sx={{
          color: "#fff"
        }}
        rows={cropState}
        getRowId={cropState => cropState._id}
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
