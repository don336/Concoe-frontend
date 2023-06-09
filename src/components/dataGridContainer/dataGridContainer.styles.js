import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../Styles/theme.jsx";

export const Container = styled("div")`
  width: 100%;
  background: #333;
  height: auto;
  margin: ${({ margin, theme }) => margin || theme.spacing(5, 0)};
  padding: 0;
  border: none;
  border-radius: 22px;
`;

export const MuiStack = styled(Stack)`
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 0.325rem;
`;
