import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { COLORS } from "../../Styles/theme";

export const StyledFooterBar = styled(Box)`
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  border-top: 1px solid ${COLORS.YELLOW_GREEN};
`;
export const StyledStack = styled(Stack)`
  justify-content: space-between;
  padding: 10px;
  color: ${COLORS.WHITE_SMOKE};
`;
