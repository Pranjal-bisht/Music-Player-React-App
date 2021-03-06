import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libOpen, setLibOpen }) => {
  return (
    <nav className={`${libOpen ? "library-open" : ""}`}>
      <h1>Music Player</h1>
      <button onClick={() => setLibOpen(!libOpen)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
