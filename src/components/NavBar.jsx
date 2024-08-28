import React from "react";
import { Link } from "react-router-dom";

function NavBar({ onSearch }) {
  return (
    <div className="navBarDiv">
      <h1>PuppyBowl</h1>
      <input
        type="text"
        placeholder="Search for a player..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div id="linkContainer">
        <nav>
          <Link id="homeLink" to="/">
            Home
          </Link>
          <Link id="addNewPlayerLink" to="/new-player">
            Add New Player
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
