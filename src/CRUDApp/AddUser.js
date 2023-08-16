import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { saveUserToDb } from "../Actions/UserAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", state);
    //api call
    dispatch(saveUserToDb(state));
    navigate("/");
  };

  return (
    <div>
      <h3 style={{ margin: "10px 0 10px 0" }}>Add User Form</h3>
      <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">User Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => setState({ ...state, name: event.target.value })}
          value={state.name}
        />
        <Form.Label htmlFor="inputPassword5">User Email</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) =>
            setState({ ...state, email: event.target.value })
          }
          value={state.email}
        />
        <Form.Label htmlFor="inputPassword5">User Gender</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) =>
            setState({ ...state, gender: event.target.value })
          }
          value={state.gender}
        >
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
        <Button type={"submit"} style={{ margin: "10px 0" }} variant="success">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
