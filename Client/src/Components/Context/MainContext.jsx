import React, { useState, useEffect, createContext } from "react";

//Dependencies
import axios from "axios";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //Store modified search
  const [search, setSearch] = useState("");

  //store book selected
  const [bookSelected, setBookSelected] = useState([]);
  const [shelf, setShelf] = useState("");
  const [bookDetails, setBookDetails] = useState([]);

  //Store books in shelf
  const [WantToRead, setWantToRead] = useState([]);
  const [CurrentlyReading, setCurrentlyReading] = useState([]);
  const [Read, setRead] = useState([]);

  // const GetBook = (books) => {
  //   setBook(books);
  // };

  // const SearchBooks = (searchParam) => {
  //   setSearch(searchParam);
  // };
  return (
    <MainContext.Provider
      value={[
        bookSelected,
        setBookSelected,
        WantToRead,
        setWantToRead,
        CurrentlyReading,
        setCurrentlyReading,
        Read,
        setRead,
        bookDetails,
        setBookDetails,
      ]}
    >
      {children}
    </MainContext.Provider>
  );
};
