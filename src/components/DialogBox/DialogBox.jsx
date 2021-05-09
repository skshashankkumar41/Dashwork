import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as s from "./DialogBox.styles";
import axios from "axios";

export default function AddIntentDialog(props) {
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

  const handleAddRequest = async () => {
    const obj = { intent_name: intent };
    const { data: response } = await axios.post(
      "http://127.0.0.1:5000/add_intent/",
      obj
    );
    console.log(response["response"]);
    setOpen(false);
    props.onRequestComplete(response["response"]);
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
          <Button onClick={handleAddRequest} color="primary">
            Add Intent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}