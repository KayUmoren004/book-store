import React from "react";

//Dependencies
import { useContext, useState } from "react";
import { AccessTokenContext } from "../../Context/AccessTokenContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginScreen from "./LoginScreen";
import styled from "styled-components";
import { BookContext } from "../../Context/BookContext";

//Main Component
const Login = (props) => {
  //Handle Auth
  const { login } = useContext(AccessTokenContext);
  const { setToken } = useContext(BookContext);
  const history = useHistory();

  //Save User Input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Handle AJAX loading && Error
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    //Auth
    axios
      .request({
        method: "POST",
        url: "/api/signin",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          username,
          password,
        }),
      })
      .then((res) => {
        const { token, expiry } = res.data;
        if (!token) throw Error("Missing JWT token");
        login(token, expiry);
        setToken(token);

        history.push({
          pathname: "/",
          state: {
            AuthToken: token,
          },
        });
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setErrorMessage("Invalid username or password");
        } else setErrorMessage("We are sorry, unexpected error occurred.");
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <LoginScreen
        loading={isLoading}
        signIn={login}
        onSubmit={handleSubmit}
        setUserName={setUsername}
        setPassword={setPassword}
        errorMessage={errorMessage}
      />
    </Container>
  );
};

const Container = styled.div``;

export default Login;
