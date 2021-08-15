import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import clasess from "./Layout.module.scss";

export class Header extends Component {
  render() {
    return (
      <div className={clasess.Header}>
        <nav>
          <div className={clasess.Logo}>React Web </div>
          <ul>
            <li>
              <NavLink to="/" activeClassName={clasess.selected} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/login" activeClassName={clasess.selected}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
