import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { COLORS } from "../../Styles/theme";

export const StyledFooterBar = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #3a3a3a;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
`;
export const StyledStack = styled(Stack)`
  justify-content: space-between;
  padding: 10px;
  color: ${COLORS.WHITE_SMOKE};
`;
