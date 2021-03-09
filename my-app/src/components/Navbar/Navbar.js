import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-items">
        <h1>Logo</h1>
        <div className="menu-icon"></div>
        <ul className="nav-menu">
          {menuItems.map((item) => {
            return (
              <li key={item.title}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

