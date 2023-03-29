import {
  Typography as muiTypography,
  AppBar as muiAppbar,
  Box as muiBox,
  Link as muiLink,
} from "@mui/material";
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
`;
