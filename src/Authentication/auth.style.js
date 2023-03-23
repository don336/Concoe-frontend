import { Box as BoxItem } from "@mui/material";
import {
  Container as muiContainer,
  styled,
  Stack as muiStack,
  TextField as muiTextField,
} from "@mui/material";
import { COLORS } from "../Styles/theme";

export const StyledBox = styled(BoxItem)`
  display: flex;
  margin: auto;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 80vh;
  width: 50%;
  border-radius: 5px;
  background-color: ${COLORS.BLAK_OLIVE};
  padding: 10px;
`;
export const StyledContainer = styled(muiContainer)`
  background-color: ${COLORS.OUTERSPACE_GREY};
  height: 100vh;
  padding: 50px;
`;
export const StyledStack = styled(muiStack)`
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  width: 60%;
  background-color: #fff;
`;
export const StyledTextField = styled(muiTextField)`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
`;
