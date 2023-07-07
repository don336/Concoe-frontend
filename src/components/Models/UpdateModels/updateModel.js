import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background: #fff;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 4px;
`;
