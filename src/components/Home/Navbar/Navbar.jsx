import React from "react";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav-item slam-left">
          <a className="a-navbar" href="#/">Honda</a>
        </li>
        <li className="nav-item">
          <a className="a-navbar" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="a-navbar" href="#">Settings</a>
        </li>
        <li className="nav-item">
          <a className="a-navbar" href="#">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
