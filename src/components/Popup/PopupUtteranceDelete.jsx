import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { toaster } from "../../utils/toaster";

const handleDelteRequest = async (
  recordForDelete,
  setOpenPopup,
  onDataChange
) => {
  const obj = recordForDelete;
  const { data: response } = await axios.post(
    "http://127.0.0.1:5000/delete_utterance/",
    obj
  );
  setOpenPopup(false);
  console.log(response["response"]);
  onDataChange();
  toaster(response);
  // props.onRequestComplete(response["response"]);
};

const PopupUtteranceDelete = (props) => {
  const { openPopup, setOpenPopup, recordForDelete, onDataChange } = props;
  return (
    <Dialog
      open={openPopup}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleDelteRequest(recordForDelete, setOpenPopup, onDataChange);
        }
      }}
    >
      <DialogTitle>
        <div>Are you sure delete this Utterance?</div>
      </DialogTitle>
      <DialogContent>
        <Typography align="center" color="secondary">
          "{recordForDelete && recordForDelete["utterance"]}"
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenPopup(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            handleDelteRequest(recordForDelete, setOpenPopup, onDataChange)
          }
          color="primary"
        >
          Delete Intent
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupUtteranceDelete;
