// src/components/NavBar.js

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        <span className="">
            <Link class="homeLink navLinks" to={'/'}>Home</Link>
        </span>
        <span className="">
            <Link class="aboutLink navLinks" to={'/schedule'}>Schedule</Link>
        </span>
    </div>
  );
};

export default NavBar;