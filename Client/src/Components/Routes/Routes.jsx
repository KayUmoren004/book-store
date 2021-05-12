import React from "react";

//Dependencies

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Screens/Auth/Login";
import Container from "../Screens/Container/Container";
import BookDetails from "../Screens/Details/BookDetailsContainer";
import BookShelf from "../Screens/Shelf/BookShelfContainer";
import Search from "../Screens/Search/SearchContainer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/">
          <Container />
        </ProtectedRoute>
        <ProtectedRoute exact path="/search">
          <Search />
        </ProtectedRoute>
        <ProtectedRoute exact path="/bookshelf">
          <BookShelf />
        </ProtectedRoute>
        <ProtectedRoute exact path="/book">
          <BookDetails />
        </ProtectedRoute>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
