import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as s from "./DialogBox.styles";

export default function AddIntentDialog() {
  const [open, setOpen] = React.useState(false);
  const [intent, setIntent] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    setIntent(value);
  };

  return (
    <div>
      <s.HeaderButton onClick={handleClickOpen}>+ Add Intent</s.HeaderButton>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + Add Intent
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Intent</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            // margin="dense"
            id="name"
            label="Intent Name"
            type="text"
            fullWidth
            onChange={(e) => handleChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Intent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
