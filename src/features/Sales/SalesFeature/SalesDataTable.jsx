import { useEffect, useState } from "react";
import { Stack, Button, Box } from "@mui/material/";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGridContainer } from "../../../components/DataGridContainer/index.js";
import { DataGrid } from "../../../elements/DataGrid/DataGrid.jsx";
import { getAllSales, deleteSale } from "./SaleService.js";
import { COLORS } from "../../../styles/theme.jsx";
import DeleteModal from "../../../components/DeleteModal/deleteModal.jsx";

const rendercell = params => {
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const saleId = params.row._id;
    const customerId = params.row.customerId.customerId;

    const ids = {
      saleId,
      customerId
    };
    dispatch(deleteSale(ids));
    setOpenDelete(false);
  };

  const sale = params.row.name;

  return (
    <Box>
      <Stack direction="row" spacing={2}>
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
      {openDelete && (
        <DeleteModal
          open={openDelete}
          handleClick={() => setOpenDelete(false)}
          title={sale}
          handleRemoveClick={() => handleDelete()}
          subtitle={sale}
        />
      )}
    </Box>
  );
};

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
    minWidth: 200,
    editable: true
  },
  {
    field: "totalAmount",
    headerName: "TotalAmount",
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

export default function SalesDataGrid() {
  const Authenticated = useSelector(state => state.auth.isAuthenticated);
  const rowData = useSelector(state => state.sales.salesData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Authenticated) {
      navigate("/Login");
    }
    dispatch(getAllSales());
  }, []);
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
        rows={rowData}
        getRowId={rowData => rowData._id}
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
