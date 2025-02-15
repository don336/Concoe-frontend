import styled from "@emotion/styled";
import {
  Container as muiContainer,
  Box,
  Button as muiButton,
  Stack as muiStack,
  Typography,
  Stack
} from "@mui/material";
import { Link } from "react-router-dom";
import { COLORS } from "../../styles/theme.jsx";

export const StyledContainer = styled(muiContainer)`
  padding: 30px 15px 20px 20px;
  margin-top: 50px;
`;
export const StyledTypography = styled(Typography)`
  padding: 0.5rem;
  color: ${COLORS.WHITE_SMOKE};
  border-left: 3px solid ${COLORS.YELLOW_GREEN};
`;
export const MissionTypography = styled(Typography)`
  padding: 0.5rem;
  color: ${COLORS.WHITE_SMOKE};
  margin-left: 1rem;
`;
export const TeamTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  margin: auto;
  margin-left: 1rem;
  border-left: 3px solid ${COLORS.YELLOW_GREEN};

  color: #333;
`;
export const StyledBox = styled(Box)`
  padding: 30px 0;
  color: #fff;
`;
export const StyledButton = styled(muiButton)`
  padding: 7px;
  border-radius: 18px;
  background-color: #d3e298;
  color: #333;
  font-size: 10px;
  width: 50%;
`;
export const SecondButton = styled(muiButton)`
  padding: 7px;
  border-radius: 18px;
  background-color: transparent;
  color: #fff;
  border: 0.3px solid #333;
  font-size: 10px;
  width: 50%;
`;

export const MissionBox = styled(Stack)`
  background: #4f646f;
  border-radius: 7px;
  width: 100%;
  padding: 10px;
  margin: auto;
  margin-top: 5rem;
`;
export const TeamBox = styled(Box)`
  background: ${COLORS.WHITE_SMOKE};
  border-radius: 7px;
  width: 100%;
  color: ${COLORS.ERIE_BLACK};
  padding: 10px;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;
