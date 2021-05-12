import { createContext, useState, useEffect } from "react";

//Dependencies
import axios from "axios";
import { createCountdown, clearCountdown } from "../Utils/Refresh/refresh";
export const AccessTokenContext = createContext();

export const AccessTokenProvider = ({ children }) => {
  //store JWT Token in Redux Store
  const [token, setToken] = useState("");

  //Get new token when old one expires
  const [expiry, setExpiry] = useState();

  //Store Search Input
  const [searchParam, setSearchParam] = useState("");

  //use to determine if user is signed in
  const getToken = () => token;

  //whether or not the token is stored in the Context API
  const hasToken = () => !!token;

  //Login
  const login = (token, expiry) => {
    setToken(token);
    setExpiry(expiry);
  };

  //Logout
  const logout = () => {
    return axios
      .request({
        method: "DELETE",
        url: "/api/signout",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .catch((err) => console.log(err))
      .then(() => {
        setToken("");
        setExpiry();
      });
  };

  //Search for books
  const SearchBooks = (searchParam) => {
    setSearchParam(searchParam);
  };

  //When new token is needed
  const refreshToken = () => {
    return axios
      .request({
        method: "GET",
        url: "/api/refresh",
      })
      .then((res) => {
        const { token, expiry } = res.data;
        setToken(token);
        setExpiry(expiry);
      })
      .catch((err) => {
        console.log(err);

        //if token is invalid, server will return 401 error
        if (err.response && err.response.status === 401) {
          logout();
        } else throw Error(err);
      });
  };

  //countdown for refresh
  useEffect(() => {
    if (expiry) createCountdown(expiry, refreshToken);
    return clearCountdown;
  }, [expiry]);

  return (
    <AccessTokenContext.Provider
      value={{
        getToken,
        hasToken,
        logout,
        login,
        refreshToken,
        SearchBooks,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};
