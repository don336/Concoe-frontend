import { Typography, Box as muiBox } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { COLORS } from "../../../styles/theme";

export const StyledBox = styled(muiBox)`
  displa: flex;
  justify-content: center;
  align-item: center;
  padding: 10px;
  margin: auto;
`;

export const StyledTypography = styled(Typography)`
  color: ${COLORS.WHITE};
  text-align: center;
  line-height: 2.5rem;
`;

export const CropLink = styled(Link)`
  text-decoration: none;
  color: none;
`;
