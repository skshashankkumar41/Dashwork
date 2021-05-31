import { Dialog, DialogTitle, makeStyles } from "@material-ui/core";
import React from "react";
import UploadFiles from "../FileUpload/FileUpload";

const useStyles = makeStyles((theme) => ({
  paper: { minWidth: "500px" },
}));

const PopupFileUpload = (props) => {
  const classes = useStyles();
  const { openPopup, setOpenPopup, onDataChange } = props;
  return (
    <Dialog open={openPopup} classes={{ paper: classes.paper }}>
      <DialogTitle>
        <div>File Upload</div>
      </DialogTitle>
      <UploadFiles
        setOpen={setOpenPopup}
        onDataChange={onDataChange}
      ></UploadFiles>
    </Dialog>
  );
};

export default PopupFileUpload;
