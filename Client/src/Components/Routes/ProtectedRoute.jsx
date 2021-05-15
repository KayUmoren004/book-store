import { useContext, useState, useEffect } from "react";
import { Route, Redirect, useParams } from "react-router-dom";
import { AccessTokenContext } from "../Context/AccessTokenContext";

const ProtectedRoute = ({ children }) => {
  const { hasToken, refreshToken } = useContext(AccessTokenContext);
  const isLoggedIn = hasToken();

  const [isRefreshing, setIsRefreshing] = useState(!isLoggedIn);
  useEffect(() => {
    if (isRefreshing) refreshToken().then(() => setIsRefreshing(false));
  }, [isRefreshing]);
  if (isRefreshing) return <></>;
  // END OF SILENT REFRESH

  return isLoggedIn ? (
    /**
     * If the user is logged in, return the child component
     */
    <Route>{children}</Route>
  ) : (
    /**
     * If the user isn't logged in, redirect to the login form
     */
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
