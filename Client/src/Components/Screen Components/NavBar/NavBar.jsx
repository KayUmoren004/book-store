import React from "react";

//Dependencies
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// //prevent auto refresh
// const handleDefault = e => {
//   e.preventDefault()
//   window.history.pushState({}, document.title, e.target.href)
// }

const NavBar = () => {
  return (
    <Nav>
      <Link to="/bookshelf">My Bookshelf</Link>

      <NavContainer>
        <NavChild>
          <Link to="/search">Search</Link>
        </NavChild>
      </NavContainer>
    </Nav>
  );
};
const Nav = styled.nav`
  background-color: green;
  display: flex;
  flex: 1;
  align-items: center;
  align-self: center;
`;
const NavContainer = styled.ul`
  /* width: 100%;
  float: left;
  margin: 0 0 3em 0;
  padding: 0; */

  list-style: none;
`;
const NavChild = styled.li`
  float: left;
  text-align: center;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  /* width: 10%; */
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
`;

export default NavBar;
