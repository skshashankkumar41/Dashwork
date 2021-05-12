import { Paper, TextField, Toolbar, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
// import * as s from "./DialogBox.styles";
import { HeaderButton } from "./Utterances.styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "85%",
  },
}));

const Utterances = (props) => {
  const classes = useStyles();
  // console.log("UTTERANCE PROPS::::", props);
  // props.changeHeader("Utterances");

  // useEffect(() => {
  //   props.changeHeader(`Utterance ${props.intentName}`);  {props.location.state.intent_name} </p>
  // }, [props]);

  const [utterance, setUtterance] = useState("");

  const handleChange = (value) => {
    setUtterance(value);
  };

  const handleAddUtterance = async () => {
    const obj = {
      intent_name: props.location.state.intent_name,
      utterance: utterance,
    };
    const { data: response } = await axios.post(
      "http://127.0.0.1:5000/add_utterance/",
      obj
    );
    // setOpen(false);
    // props.onDataChange();
    console.log(response["response"]);
    setUtterance("");
  };

  return (
    <React.Fragment>
      <Paper>
        <Toolbar>
          <TextField
            id="filled-basic"
            label="Add Utternaces"
            value={utterance}
            variant="filled"
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

          <HeaderButton onClick={handleAddUtterance}>
            + Add Utterance
          </HeaderButton>
        </Toolbar>
      </Paper>
    </React.Fragment>
  );
};

export default Utterances;
