import React from "react";
import "./Header.css";

function Header(props) {
  let isMenuVisible = props.isMenuVisible;

  if (isMenuVisible) {
    return (
      <div className="headerMain">
        <h1>NUCLEAR CALCULATOR</h1>

        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Radioactive.svg" alt="logo radiocative"></img>
        <div className="menuBar">TU BEDZIE MENU HEHE</div>
      </div>
    );
  } else {
    return (
      <div className="headerMain">
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Radioactive.svg" alt="logo radiocative"></img>
        <h1>NUCLEAR CALCULATOR</h1>

        <div className="menuBar"></div>
      </div>
    );
  }
}

export default Header;
