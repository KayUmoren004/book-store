import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  //State
  const [bookSelected, setBookSelected] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const [token, setToken] = useState("");

  return (
    <BookContext.Provider
      value={{
        bookSelected,
        setBookSelected,
        bookDetails,
        setBookDetails,
        token,
        setToken,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
