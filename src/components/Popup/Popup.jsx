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
import { toast } from "react-toastify";

const handleDelteRequest = async (
  recordForDelete,
  setOpenPopup,
  onDataChange
) => {
  const obj = { intent_name: recordForDelete };
  const { data: response } = await axios.post(
    "http://127.0.0.1:5000/delete_intent/",
    obj
  );
  setOpenPopup(false);
  console.log(response["response"]);
  onDataChange();
  toast(response["response"], {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  // props.onRequestComplete(response["response"]);
};

const Popup = (props) => {
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
        <div>Are you sure delete this intent?</div>
      </DialogTitle>
      <DialogContent>
        <Typography align="center" color="secondary">
          "{recordForDelete && recordForDelete}"
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

export default Popup;
