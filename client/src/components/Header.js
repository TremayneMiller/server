// Set up a Header component to export to App.js

import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="http://" className="brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="http://">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
