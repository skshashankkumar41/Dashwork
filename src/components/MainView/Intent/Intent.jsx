import React, { useState, useEffect } from "react";
import useTable from "../../Table/Table";
import axios from "axios";
import AddIntentDialog from "../../DialogBox/DialogBox";
import {
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  makeStyles,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Input from "./../../Inputs/Inputs";
import { Search } from "@material-ui/icons";
import ActionButton from "../../Buttons/Buttons";
import Popup from "../../Popup/Popup";
import { useHistory } from "react-router-dom";
import { HeaderButton } from "../../FileUpload/FileUpload.styles";
import PopupFileUpload from "./../../Popup/PopupFileUpload";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "intentName", label: "Intents", disableSorting: true, style: "intent" },
  // { id: "status", label: "Status", disableSorting: true },
  { id: "actions", label: "Actions", disableSorting: true, style: "action" },
];

const Intent = () => {
  const classes = useStyles();
  const [intents, setIntents] = useState([]);
  const [dataChange, setDataChange] = useState(false);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openFilePopup, setOpenFilePopup] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const history = useHistory();

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(intents, headCells, filterFn, 10);

  const handleDataChange = () => {
    setDataChange(!dataChange);
  };

  // Use Effect to render table
  useEffect(() => {
    async function getIntents() {
      let response = await axios.get("http://127.0.0.1:5000/get_intents/");
      let data = await response.data;
      // console.log("GET ITENTS::", data["intents"]);
      setIntents(data["intents"]);
    }
    getIntents();
  }, [dataChange]);

  // console.log("STATE INTENTS::", intents);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else return items.filter((x) => x.toLowerCase().includes(target.value));
      },
    });
  };

  const handleDeletePopup = (item) => {
    setRecordForDelete(item);
    setOpenPopup(true);
  };

  const handleFilePopup = () => {
    setOpenFilePopup(true);
  };

  return (
    <React.Fragment>
      {/* <PageTitle onDataChange={handleDataChange}></PageTitle> */}
      <Paper className={classes.pageContent}>
        {/* <PageTitle onDataChange={handleDataChange}></PageTitle> */}
        <Toolbar>
          <Input
            label="Search Intents"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search></Search>
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          ></Input>
          <AddIntentDialog onDataChange={handleDataChange}></AddIntentDialog>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
            title="Upload csv/xlsx file with one column as utterance and other as intent to update data"
            arrow
          >
            <HeaderButton onClick={() => handleFilePopup()}>
              File Upload
            </HeaderButton>
          </Tooltip>
        </Toolbar>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPagingAndSorting().map((item, itemIndex) => (
              <TableRow key={itemIndex}>
                <TableCell style={{ paddingLeft: 50 }}>{item}</TableCell>
                <TableCell align="right" style={{ paddingRight: 100 }}>
                  <ActionButton
                    onClick={() => {
                      history.push({
                        pathname: "/intent/utterance",
                        state: { intent_name: item },
                      });
                    }}
                  >
                    <EditOutlinedIcon fontSize="small"></EditOutlinedIcon>
                  </ActionButton>
                  <ActionButton onClick={() => handleDeletePopup(item)}>
                    <CloseIcon fontSize="small"></CloseIcon>
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        recordForDelete={recordForDelete}
        onDataChange={handleDataChange}
      ></Popup>
      <PopupFileUpload
        openPopup={openFilePopup}
        setOpenPopup={setOpenFilePopup}
        onDataChange={handleDataChange}
      ></PopupFileUpload>
    </React.Fragment>
  );
};

export default Intent;
