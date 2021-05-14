import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  makeStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "100%",
  },

  paper: { minWidth: "800px" },
}));

const handleUpdateRequest = async (
  recordForDelete,
  setOpenPopup,
  onDataChange,
  updatedUtterance
) => {
  const obj = {
    intent_name: recordForDelete["intent_name"],
    utterance: recordForDelete["utterance"],
    updated_utterance: updatedUtterance,
  };
  const { data: response } = await axios.post(
    "http://127.0.0.1:5000/update_utterance/",
    obj
  );
  setOpenPopup(false);
  console.log(response["response"]);
  onDataChange();
  // props.onRequestComplete(response["response"]);
};

const PopupUtteranceUpdate = (props) => {
  const classes = useStyles();
  const { openPopup, setOpenPopup, recordForUpdate, onDataChange } = props;

  const [updatedUtterance, setUpdatedUtterance] = useState(null);

  useEffect(() => {
    setUpdatedUtterance(recordForUpdate && recordForUpdate["utterance"]);
  }, [recordForUpdate]);

  const handleChange = (value) => {
    setUpdatedUtterance(value);
  };

  return (
    <Dialog open={openPopup} classes={{ paper: classes.paper }}>
      <DialogTitle>
        <div>Utterance Editor</div>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          // margin="dense"
          id="outlined-basic"
          className={classes.searchInput}
          variant="outlined"
          label="Utterance"
          type="text"
          value={updatedUtterance}
          fullWidth
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUpdateRequest(
                recordForUpdate,
                setOpenPopup,
                onDataChange,
                updatedUtterance
              );
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenPopup(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            handleUpdateRequest(
              recordForUpdate,
              setOpenPopup,
              onDataChange,
              updatedUtterance
            )
          }
          color="primary"
        >
          Update Utterance
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupUtteranceUpdate;
