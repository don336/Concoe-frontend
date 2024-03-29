import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form } from "formik";

export const StyledStack = styled(Stack)`
  margin: ${({ theme }) => `${theme.spacing(4)} auto`};
  padding: 0;
  width: 25.125rem;
`;

export const StyledTypography = styled(Typography)`
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

export const StyledForm = styled(Form)`
  padding: 10px;
`;
