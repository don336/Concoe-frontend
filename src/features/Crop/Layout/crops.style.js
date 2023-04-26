import { Typography, Box as muiBox } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { COLORS } from "../../../Styles/theme";

export const StyledBox = styled(muiBox)`
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
  background: linear-gradient(
    0deg,
    rgba(5, 5, 45, 1) 26%,
    rgba(10, 25, 45, 0.773546918767507) 68%,
    rgba(5, 9, 22, 1) 100%,
    rgba(13, 15, 20, 1) 100%
  );
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
