import styled from "@emotion/styled";
import { Typography as muiTypography, Box as muiBox } from "@mui/material";
import { Form } from "formik";
import { COLORS } from "../../../styles/theme";

export const StyledForm = styled(Form)`
  background: none;
`;

export const StyledWelcomeBox = styled(muiBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  padding: 2rem;
  height: 400px;
  text-align: center;
`;

export const StyledTypography1 = styled(muiTypography)`
  color: ${COLORS.WHITE_SMOKE};
  line-height: 2.3rem;
`;
