import {
  Paper,
  TextField,
  Toolbar,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  InputAdornment,
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

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "85%",
    height: "10",
  },
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
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

  return (
    <React.Fragment>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <TextField
            id="outlined-basic"
            label="Add Utternaces"
            value={utterance}
            variant="outlined"
            className={classes.searchInput}
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
                      // onClick={() => {
                      //   history.push({
                      //     pathname: "/intent/utterance",
                      //     state: { intent_name: item },
                      //   });
                      // }}
                    ></EditOutlinedIcon>
                  </ActionButton>
                  <ActionButton>
                    <CloseIcon
                      fontSize="small"
                      // onClick={() => handleDeletePopup(item)}
                    ></CloseIcon>
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
      </Paper>
    </React.Fragment>
  );
};

export default Utterances;
