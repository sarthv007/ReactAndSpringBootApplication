import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UsersSelector } from "../Selectores/UsersSelector";
import Loader from "../Components/SPA/Loader";
import { deleteUserFromDB, getUsers } from "../Actions/UserAction";
import { Link } from "react-router-dom";

function UserList() {
  const { loading, error, users } = useSelector(UsersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const deleteUser = (id) => {
    //deleteUserApi
    dispatch(deleteUserFromDB(id));
  };
  console.log("users data", users);
  return (
    <div>
      <h2>User Listing</h2>

      <Link to={"add-users"}>
        <Button variant="primary">Add User</Button>
      </Link>

      {loading ? <Loader /> : ""}
      {users ? (
        <div style={{ margin: "20px 0" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => {
                  return (
                    <React.Fragment key={user._id}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>
                          <Link to={`users/${user.id}`}>
                            <Button variant="primary">Edit</Button>
                          </Link>
                          |
                          <Button
                            variant="primary"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
      {error ? <h3>{error}</h3> : ""}
    </div>
  );
}

export default UserList;
