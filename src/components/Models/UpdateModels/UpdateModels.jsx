import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material/";
import { StyledModalBox } from "./updateModel";
StyledModalBox;

const deleteModal = ({ handleClose, open, rowData }) => {
  console.log(rowData, "=========================>");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </StyledModalBox>
      </Modal>
    </div>
  );
};

export default deleteModal;
