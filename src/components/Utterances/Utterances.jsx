import {
  Paper,
  TextField,
  Toolbar,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
// import * as s from "./DialogBox.styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { Search } from "@material-ui/icons";
import { HeaderButton } from "./Utterances.styles";
import axios from "axios";
import useTable from "./../Table/Table";
import Input from "../Inputs/Inputs";
import ActionButton from "../Buttons/Buttons";
import PopupUtteranceDelete from "./../Popup/PopupUtteranceDelete";
import PopupUtteranceUpdate from "./../Popup/PopupUtteranceUpdate";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "65%",
  },

  utteranceInput: {
    marginTop: theme.spacing(1),
    width: "85%",
  },

  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },

  addPageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
  },
  intentHead: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
    fontWeight: "600",
    color: "#354858",
  },
  intentTitle: {
    marginLeft: theme.spacing(0.4),
    marginTop: theme.spacing(1),
    fontWeight: "600",
    color: "#3F51B5",
  },
}));

const Utterances = (props) => {
  // console.log("UTTERANCE PROPS::::", props);
  // props.changeHeader("Utterances");

  // useEffect(() => {
  //   props.changeHeader(`Utterance ${props.intentName}`);  {props.location.state.intent_name} </p>
  // }, [props]);
  const classes = useStyles();
  const intentName = props.location.state.intent_name;
  const [utterance, setUtterance] = useState("");
  const [utterances, setUtterances] = useState([]);
  const [dataChange, setDataChange] = useState(false);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [recordForUpdate, setRecordForUpdate] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openUpdatePopup, setOpenUpdatePopup] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const headCells = [
    {
      id: "utterances",
      label: "Utterances",
      disableSorting: true,
      style: "intent",
    },
    // { id: "status", label: "Status", disableSorting: true },
    { id: "actions", label: "Actions", disableSorting: true, style: "action" },
  ];

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(utterances, headCells, filterFn, 10);

  const handleChange = (value) => {
    setUtterance(value);
  };
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else return items.filter((x) => x.toLowerCase().includes(target.value));
      },
    });
  };

  useEffect(() => {
    async function getUtterances() {
      const obj = {
        intent_name: intentName,
      };
      let response = await axios.post(
        "http://127.0.0.1:5000/get_utterances/",
        obj
      );
      let data = await response.data;
      // console.log("GET ITENTS::", data["intents"]);
      setUtterances(data["utterances"]);
    }
    getUtterances();
  }, [dataChange, intentName]);

  const handleDataChange = () => {
    setDataChange(!dataChange);
  };

  const handleAddUtterance = async () => {
    const obj = {
      intent_name: intentName,
      utterance: utterance,
    };
    const { data: response } = await axios.post(
      "http://127.0.0.1:5000/add_utterance/",
      obj
    );
    // setOpen(false);
    // props.onDataChange();
    console.log(response["response"]);
    handleDataChange();
    setUtterance("");
  };

  const handleDeletePopup = (item) => {
    setRecordForDelete({ intent_name: intentName, utterance: item });
    setOpenPopup(true);
  };

  const handleUpdatePopup = (item) => {
    setRecordForUpdate({ intent_name: intentName, utterance: item });
    setOpenUpdatePopup(true);
  };

  return (
    <React.Fragment>
      <Paper className={classes.addPageContent}>
        <Typography
          className={classes.intentHead}
          variant="h5"
          display="inline"
        >
          Intent:
        </Typography>
        <Typography
          className={classes.intentTitle}
          variant="h5"
          display="inline"
        >
          {intentName}
        </Typography>
        <Toolbar display="inline">
          <TextField
            id="outlined-basic"
            label="Add Utternaces"
            value={utterance}
            variant="outlined"
            className={classes.utteranceInput}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddUtterance();
              }
            }}
          />

          <HeaderButton onClick={handleAddUtterance} disabled={!utterance}>
            + Add Utterance
          </HeaderButton>
        </Toolbar>
      </Paper>
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
            size="small"
            onChange={handleSearch}
          ></Input>
        </Toolbar>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPagingAndSorting().map((item, itemIndex) => (
              <TableRow key={itemIndex}>
                <TableCell style={{ paddingLeft: 50 }}>{item}</TableCell>
                <TableCell align="right" style={{ paddingRight: 100 }}>
                  <ActionButton>
                    <EditOutlinedIcon
                      fontSize="small"
                      onClick={() => handleUpdatePopup(item)}
                    ></EditOutlinedIcon>
                  </ActionButton>
                  <ActionButton>
                    <CloseIcon
                      fontSize="small"
                      onClick={() => handleDeletePopup(item)}
                    ></CloseIcon>
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
      </Paper>
      <PopupUtteranceDelete
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        recordForDelete={recordForDelete}
        onDataChange={handleDataChange}
      ></PopupUtteranceDelete>
      <PopupUtteranceUpdate
        openPopup={openUpdatePopup}
        setOpenPopup={setOpenUpdatePopup}
        recordForUpdate={recordForUpdate}
        onDataChange={handleDataChange}
      ></PopupUtteranceUpdate>
    </React.Fragment>
  );
};

export default Utterances;
