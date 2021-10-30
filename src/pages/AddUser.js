import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const [state,setState] = useState({
      name:"",
      address:"",
      email:"",
      contact:"",
  })
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="standard-basic" label="Standard" />
        <TextField id="standard-basic" label="Standard" />
        <TextField id="standard-basic" label="Standard" />
      </form>
    </div>
  );
};

export default AddUser;
