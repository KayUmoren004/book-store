import React, { useState, useEffect, createContext } from "react";

//Dependencies
import axios from "axios";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  //Store modified search
  const [search, setSearch] = useState("");

  const SearchBooks = (searchInput) => {
    setSearch(searchInput);
  };
  return (
    <MainContext.Provider value={{ SearchBooks }}>
      {children}
    </MainContext.Provider>
  );
};
