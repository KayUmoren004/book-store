import React, { useEffect } from "react";

//Dependencies
import NavBar from "../../Screen Components/NavBar/NavBar";
import { useLocation, useHistory } from "react-router-dom";

const Container = (props) => {
  //Pass Dynamic Link Data
  const location = useLocation();
  const token = location.state?.AuthToken;
  const history = useHistory();

  useEffect(() => {
    history.push({
      pathname: "/bookshelf",
      state: {
        AuthToken: token,
      },
    });
    window.sessionStorage.setItem("auth", token);
  }, [history, token]);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Container;
