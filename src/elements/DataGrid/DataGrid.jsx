import React, { useState } from "react";
import Box from "@mui/material/Box";
import StraightIcon from "@mui/icons-material/Straight";
import { ONE_REM_TO_PX } from "../../styles/theme.jsx";
import { MUIDataGrid, DownIcon } from "./DataGrid.styles.js";

export const DataGrid = ({ columns, rows, height, headerHeight = 2.5, hideColumn, getRowId }) => {
  const [pageSize, setPageSize] = useState(5);
  /**
   * borderRadius is found on the .MuiDataGrid-root class but cant seem to target in in
   * styled components hence the use of the `sx prop` in MUIDataGrid
   */
  return (
    <Box sx={{ height, width: "100%" }}>
      <MUIDataGrid
        sx={{ borderRadius: 0 }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        getRowId={getRowId}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[2, 5, 10, 20]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        checkboxSelection={false}
        headerHeight={headerHeight * ONE_REM_TO_PX}
        disableColumnMenu={false}
        columnVisibilityModel={{
          status: false,
          [hideColumn]: false
        }}
        components={{
          ColumnSortedDescendingIcon: DownIcon,
          ColumnSortedAscendingIcon: StraightIcon
        }}
      />
    </Box>
  );
};

export default DataGrid;
