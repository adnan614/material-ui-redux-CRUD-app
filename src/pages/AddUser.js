import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  const [error, setError] = useState();

  const dispatch = useDispatch();

  const { name, email, address, contact } = state;

  let history = useHistory();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("please input all the fileds");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        style={{ marginTop: "10px", width: "100px" }}
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
        style={{ width: "100px" }}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          type="text"
          name="name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          type="number"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "100px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
