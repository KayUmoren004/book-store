import React from "react";

//Dependencies
import { useContext, useState } from "react";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import NavBar from "../../Screen Components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BookDetails from "../Details/BookDetails";
import BookShelf from "../Shelf/BookShelf";
import Search from "../Search/Search";
import { Button } from "@material-ui/core";
import ProtectedRoute from "../../Routes/ProtectedRoute";

const Container = () => {
  const { logout } = useContext(AccessTokenContext);
  return (
    <div>
      <NavBar />
      <main>
        <Button onClick={logout}>Logout</Button>
      </main>
    </div>
  );
};

export default Container;
