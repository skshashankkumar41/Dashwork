import React, { useState, useEffect } from "react";
import useTable from "../../Table/Table";
import axios from "axios";
// import AddIntentDialog from "../../DialogBox/DialogBox";
import { TableBody, TableCell, TableRow } from "@material-ui/core";
// import Header from "../../Header/Header";
import PageTitle from "./../../PageTitle/PageTitle";

const headCells = [{ id: "intentName", label: "Intent Name" }];

// async function getIntents() {
//   let response = await axios.get("http://127.0.0.1:5000/get_intents/");
//   let data = await response.data;
//   // console.log("GET ITENTS::", data["intents"]);
//   // setIntents(data["intents"]);
//   return data["intents"];
// }

const Intent = () => {
  const [intents, setIntents] = useState([]);
  const [dataChange, setDataChange] = useState(false);

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(intents, headCells);

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

  console.log("STATE INTENTS::", intents);

  return (
    <React.Fragment>
      <PageTitle onDataChange={handleDataChange}></PageTitle>
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
    </React.Fragment>
  );
};

export default Intent;
