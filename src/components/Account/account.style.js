import styled from "@emotion/styled";
import {
  Box as muiBox,
  Stack as muiStack,
  Link as muiLink,
  Typography as muiTypography,
  Grid as muiGrid,
} from "@mui/material";
import { COLORS } from "../../Styles/theme";

export const SideBar = styled(muiStack)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid #a2d729;
  width: 200px;
  min-height: 100vh;
`;

export const ProfileBox = styled(muiBox)`
  padding: 15px;
  margin-top: 7px;
  background: #3a3a3a;
  border-radius: 15px;
  color: ${COLORS.WHITE_SMOKE};
  width: 800px;
`;

export const TabBox = styled(muiBox)`
    flex-grow: 1;
    background: inherit;
    border-radius: "15px",
    color: ${COLORS.WHITE_SMOKE};
    display: flex;
    min-height: 100vh;
`;
export const Styledbox = styled(muiBox)`
  padding: 10px;
  background: ${COLORS.WHITE_SMOKE};
  border-radius: 5px;
  color: ${COLORS.WHITE};
  margin-top: 10px;
`;
