import React, { useState, useEffect } from "react";
import useTable from "../../Table/Table";
import axios from "axios";
import { TableBody, TableCell, TableRow } from "@material-ui/core";

const Intent = () => {
  const { TblContainer } = useTable();
  const [intents, setIntents] = useState([]);

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
        <TableBody>
          {intents.map((item, itemIndex) => (
            <TableRow key={itemIndex}>
              <TableCell>{item}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </React.Fragment>
  );
};

export default Intent;
