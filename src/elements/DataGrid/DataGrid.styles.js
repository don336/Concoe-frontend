import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import StraightIcon from "@mui/icons-material/Straight";
import { COLORS } from "../../styles/theme";

export const MUIDataGrid = styled(DataGrid)`
  border: 0;
  .MuiDataGrid-columnHeaders {
    color: ${COLORS.DARK_GREY};
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0;
  }

  .MuiDataGrid-columnSeparator {
    display: none;
  }

  .MuiDataGrid-columnHeader {
    border-right: 0.063rem solid ${COLORS.DARK_GREY};
    margin-left: ${({ theme }) => theme.spacing(1)};
    &:hover {
      font-weight: 900;
    }
    &:nth-last-of-type(-n + 2) {
      border-right: none;
    }
  }
  .MuiDataGrid-columnHeaderTitle {
    font-weight: lighter;
  }

  .MuiDataGrid-cell {
    border: none;
  }
  .MuiDataGrid-row {
    color: #000;
    border: none;
    border-radius: 0.125rem;
    width: 99%;
    margin: ${({ theme }) => theme.spacing(1.5)} auto ${({ theme }) => theme.spacing(0.313)} auto;
    cursor: pointer;
    font-weight: 700;
    height: 10rem;
  }

  .css-du8xsi-MuiStack-root {
    color: #fff;
  }
`;
export const DownIcon = styled(StraightIcon)`
  transform: rotateX(180deg);
`;
