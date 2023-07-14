import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { COLORS } from "../../../styles/theme";

export const StyledBox = styled(Box)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.WHITE_SMOKE};
  padding: 20px;
  border-radius: 5px;
`;
export const StyledContainer = styled(Container)`
  height: 100vh;
  padding: 50px;
  background: ${COLORS.ERIE_BLACK};
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;
