import React, { useContext, useEffect } from "react";
import { AccessTokenContext } from "../../Context/AccessTokenContext";

const Logout = () => {
  const { logout } = useContext(AccessTokenContext);

  useEffect(() => {
    logout();
  }, [logout]);
  return <div>Logout</div>;
};

export default Logout;
