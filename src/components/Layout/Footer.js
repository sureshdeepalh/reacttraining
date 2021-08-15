import React, { Component } from "react";
import clasess from "./Layout.module.scss";

export class Footer extends Component {
  render() {
    return (
      <div className={clasess.Footer}>
        <div>React Web &copy; All rights reserved</div>
      </div>
    );
  }
}

export default Footer;
