import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Container, MuiStack } from "./dataGridContainer.styles";

export const DataGridContainer = ({
  children,
  margin,
  border,
  headings,
  // setOpenAdd,
  buttonTitle
}) => (
  <Container width="53.125rem" margin={margin} border={border}>
    <Stack direction="row" justifyContent="space-between" mb={1.5}></Stack>

    {children}
  </Container>
);

export default DataGridContainer;
