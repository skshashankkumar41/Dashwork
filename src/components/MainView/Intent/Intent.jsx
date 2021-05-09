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
} from "@material-ui/core";
import Input from "./../../Inputs/Inputs";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "intentName", label: "Intents", disableSorting: true },
];

const Intent = () => {
  const classes = useStyles();
  const [intents, setIntents] = useState([]);
  const [dataChange, setDataChange] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(intents, headCells, filterFn);

  const handleDataChange = () => {
    setDataChange(!dataChange);
  };

  // Use Effect to render table
  useEffect(() => {
    async function getIntents() {
      console.log("CALLING GET INTENT API");
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
        </Toolbar>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPagingAndSorting().map((item, itemIndex) => (
              <TableRow key={itemIndex}>
                <TableCell>{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
      </Paper>
    </React.Fragment>
  );
};

export default Intent;
