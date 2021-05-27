import React, { useEffect, useState } from "react";

//Dependencies
import axios from "axios";
import ReadScreen from "./ReadScreen";
import WantToReadScreen from "./WantToReadScreen";
import CurrentlyReadingScreen from "./CurrentlyReadingScreen";
import styled from "styled-components";
import NavBar from "../../Screen Components/NavBar/NavBar";

const BookShelf = (props) => {
  const [state, setState] = useState({
    WantToRead: [],
    CurrentlyReading: [],
    Read: [],
  });

  const token = window.sessionStorage.getItem("auth");

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "/api/bookshelf/",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setState({
          WantToRead: res.data.books.wantToRead,
          CurrentlyReading: res.data.books.currentlyReading,
          Read: res.data.books.read,
        });
      });
  }, [token]);

  return (
    <Container>
      <NavBar />
      <WantToReadScreen data={state.WantToRead} token={token} />
      <CurrentlyReadingScreen data={state.CurrentlyReading} token={token} />
      <ReadScreen data={state.Read} token={token} />
    </Container>
  );
};

const Container = styled.div``;

export default BookShelf;
