import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(-0.5),
    // alignItems: "right",
  },
}));

export default function ActionButton(props) {
  const { children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root}`} onClick={onClick}>
      {children}
    </Button>
  );
}
