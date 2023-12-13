import * as React from "react";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

const ActionAlerts = ({ text, display }) => {
  return (
    <Box sx={{ width: "100%", display: `${display}` }} spacing={2}>
      <Alert onClose={() => {}} variant="filled" severity="error">
        {text}
      </Alert>
    </Box>
  );
};

export default ActionAlerts;
