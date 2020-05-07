import React, { Component } from "react";

import Header from "Components/Header/Header";

class Layout extends Component {
  render() {
    return (
      <section className="Layout-section">
        <Header />
        <main className="content-section">{this.props.children}</main>
      </section>
    );
  }
}

export default Layout;
