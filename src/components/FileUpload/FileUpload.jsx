import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box, Typography, Button, withStyles } from "@material-ui/core";

import UploadFilesService from "../../utils/file_upload";
import { toaster } from "../../utils/toaster";

// import UploadService from "../services/upload-files.service";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      isError: false,
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
      isError: false,
      message: "",
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadFilesService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.response,
          isError: false,
        });
        this.props.onDataChange();
        toaster(response.data);
        return this.props.setOpen(false);
      })

      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
          isError: true,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const { selectedFiles, currentFile, progress, message, isError } =
      this.state;

    return (
      <div className="mg20">
        {currentFile && (
          <Box className="mb25" display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        )}

        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: "none" }}
            type="file"
            onChange={this.selectFile}
            onClick={(e) => (e.target.value = null)}
          />
          <Button
            className="btn-choose"
            variant="outlined"
            component="span"
            onCLick={this.handleClick}
          >
            Choose File
          </Button>
        </label>
        <div
          className="file-name"
          style={{ color: "black", fontWeight: "bold" }}
        >
          {selectedFiles && selectedFiles.length > 0
            ? selectedFiles[0].name
            : null}
        </div>
        <Button
          className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </Button>
        <Button
          className="btn-cancel"
          color="primary"
          variant="contained"
          component="span"
          //   disabled={!selectedFiles}
          onClick={() => this.props.setOpen(false)}
        >
          Cancel
        </Button>

        <Typography
          variant="subtitle2"
          className={`upload-message ${isError ? "error" : ""}`}
        >
          {message}
        </Typography>

        {/* <Typography variant="h6" className="list-header">
          List of Files
        </Typography>
        <ul className="list-group">
          {fileInfos &&
            fileInfos.map((file, index) => (
              <ListItem divider key={index}>
                <a href={file.url}>{file.name}</a>
              </ListItem>
            ))}
        </ul> */}
      </div>
    );
  }
}
