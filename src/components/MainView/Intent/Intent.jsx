import React, { useState, useEffect } from "react";
import useTable from "../../Table/Table";
import axios from "axios";
import { TableBody, TableCell, TableRow } from "@material-ui/core";

const headCells = [{ id: "intentName", label: "Intent Name" }];

const Intent = () => {
  const [intents, setIntents] = useState([]);

  const { TblContainer, TblHead, TblPagination } = useTable(intents, headCells);

  // Use Effect to render table
  useEffect(() => {
    async function getIntents() {
      let response = await axios.get("http://127.0.0.1:5000/get_intents/");
      let data = await response.data;
      // console.log("GET ITENTS::", data["intents"]);
      setIntents(data["intents"]);
    }
    getIntents();
  }, []);

  console.log("STATE INTENTS::", intents);

  return (
    <React.Fragment>
      <TblContainer>
        <TblHead></TblHead>
        <TableBody>
          {intents.map((item, itemIndex) => (
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
