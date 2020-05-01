import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css"

function NavBar () {
  return (
    <nav >
      <ul>
        <li><NavLink to="/jokelist">Joke List</NavLink></li>
        <li><NavLink to="/">My Jokes</NavLink></li>
      </ul>
      
    </nav>
  )

}

export default NavBar
