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

export const WeatherBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  margin: auto;
  background: #3a3a3a;
  border-radius: 15px;
  height: 400px;
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
