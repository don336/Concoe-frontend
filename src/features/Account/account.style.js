import styled from "@emotion/styled";
import {
  Box as muiBox,
  Stack as muiStack,
  Typography as muiTypography,
  Avatar as muiAvatar,
} from "@mui/material";
import { Link } from "react-router-dom";
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
  border-radius: 15px;
  color: ${COLORS.WHITE_SMOKE};
  width: 100%;
  height: 100%;
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
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  color: ${COLORS.WHITE};
  margin-top: 10px;
`;

export const StyledTypography = styled(muiTypography)`
  padding: 5px;
  text-align: center;
  margin: auto;
  color: ${COLORS.WHITE};
`;
export const StyledAvatar = styled(muiAvatar)`
  display: flex;
  justifycontent: center;
  flexdirection: column;
  margin: auto;
  background: ${COLORS.MEDIUM_GREY};
`;

export const Profbox = styled(muiBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;
export const ActionBox = styled(muiStack)`
  display: flex;
  justify-content: center;
  margin: auto;

  padding: 10px;
  alin-items: center;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
