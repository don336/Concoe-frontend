import { Container as muiContainer } from "@mui/material";
import styled from "@emotion/styled";

export const StyledContainer = styled(muiContainer)`
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 700px) {
    height: 400vh;
  }
`;
