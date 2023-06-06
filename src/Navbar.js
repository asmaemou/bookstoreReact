import React from "react";
import {NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <label className="logo">Awesome Books</label>
        <ul>
                <li id="display-list">
                    <NavLink to="/" className="menu-item active" >List</NavLink></li>
                <li id="display-add">
                    <NavLink to="/add"  className="menu-item" >Add List</NavLink></li>
                <li id="diplay-contact">
                    <NavLink to="/contact"  className="menu-item">Contact</NavLink></li>
            </ul>
    </nav>
  );
}

export default Navbar;