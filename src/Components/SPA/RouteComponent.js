import React, { Suspense, lazy } from "react";
import { Route, Router, Routes } from "react-router-dom";

import UserList from "../../CRUDApp/UserList";
import NavbarComp from "../../CRUDApp/Navbar";
import AddUser from "../../CRUDApp/AddUser";
import EditUser from "../../CRUDApp/EditUser";

function RouteComponent() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-users" element={<AddUser />} />
        <Route path="/users/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
