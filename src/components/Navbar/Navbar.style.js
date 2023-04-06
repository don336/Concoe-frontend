import {
  Typography as muiTypography,
  AppBar as muiAppbar,
  Box as muiBox,
} from "@mui/material";
import { Link as muiLink } from "react-router-dom";
import styled from "@emotion/styled";
import { COLORS } from "../../Styles/theme";

export const StyledTypography = styled(muiTypography)`
  font-family: monospace;
  font-weighteight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
  color: ${COLORS.YELLOW_GREEN};
`;

export const StyledAppBar = styled(muiAppbar)`
  background: transparent;
  color: ${COLORS.BLAK_OLIVE};
  box-shadow: none;
`;
export const StyledBox = styled(muiBox)`
  margin: auto;
`;
export const StyledLink = styled(muiLink)`
  margin-right: 10px;
  text-decoration: none;
  border-radius: 15px;
  padding: 8px;
  text-decoration: none;
  color: #fff;
  &:hover {
    cursor: pointer;
    background: ${({ hoverbackground }) =>
      hoverbackground || COLORS.YELLOW_GREEN};
    box-shadow: ${({ boxshadow }) =>
      boxshadow ? "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)" : "auto"};
    color: ${({ hovercolor }) => hovercolor || "#333"};
  }
`;
