import React from "react";
import "./navbar.css"
function Navbar(props) {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Clicky Game</a>
          <a href="#" className="right">Score: {props.currentScore}</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;