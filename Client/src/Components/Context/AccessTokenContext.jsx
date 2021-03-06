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

  //use to determine if user is signed in
  const getToken = () => token;

  //whether or not the token is stored in the Context API
  const hasToken = () => !!token;

  //Store Err Msg
  const [err, setErr] = useState("");

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
      .catch((err) => setErr(err))
      .then(() => {
        setToken("");
        setExpiry();
      });
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
        //if token is invalid, server will return 401 error
        if (err.response && err.response.status === 401) {
          logout();
        } else setErr(err);
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
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};
