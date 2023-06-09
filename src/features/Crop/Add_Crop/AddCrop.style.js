import {
  Typography,
  Box as muiBox,
  Container as muiContainer,
} from "@mui/material";
import styled from "@emotion/styled";
import { COLORS } from "../../../Styles/theme";

export const StyledContainer = styled(muiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 1167px;
  height: 600px;
  background: #3a3a3a;
`;
export const StyledBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 500;
  height: 400;
`;
