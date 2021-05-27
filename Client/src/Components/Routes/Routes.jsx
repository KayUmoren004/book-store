import React from "react";

//Dependencies
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Screens/Auth/LoginContainer";
import Container from "../Screens/Container/Container";
import BookDetails from "../Screens/Details/BookDetailsContainer";
import BookShelf from "../Screens/Shelf/BookShelfContainer";
import Search from "../Screens/Search/SearchContainer";
import Logout from "../Screens/Auth/Logout";

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
        <ProtectedRoute exact path="/book/:id">
          <BookDetails />
        </ProtectedRoute>
        <ProtectedRoute exact path="/logout">
          <Logout />
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
