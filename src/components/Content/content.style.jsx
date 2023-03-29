import styled from "@emotion/styled";
import {
  Container as muiContainer,
  Box,
  Button as muiButton,
} from "@mui/material";

export const StyledContainer = styled(muiContainer)`
  padding: 30px 15px 20px 20px;
  margin: auto;
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
  width: 30%;
`;
export const SecondButton = styled(muiButton)`
  padding: 7px;
  margin-left: 30px;
  border-radius: 18px;
  background-color: transparent;
  color: #fff;
  border: 0.3px solid #333;
  font-size: 10px;
  width: 30%;
`;
