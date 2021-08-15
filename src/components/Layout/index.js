import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import clasess from "./Layout.module.scss";

export default class index extends Component {
  render() {
    return (
      <div className={clasess.Layout}>
        <Header />
        <div className={clasess.Container}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
