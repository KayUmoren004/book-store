import React from "react";

//Dependencies
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavChild>
          <Link to="/bookshelf">My Bookshelf</Link>
        </NavChild>
        <NavChild2>
          <Link to="/search">Search</Link>
        </NavChild2>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const NavChild = styled.li``;
const NavChild2 = styled.li`
  position: absolute;

  right: 50px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
`;

export default NavBar;
