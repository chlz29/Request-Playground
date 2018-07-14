import React, { Component } from 'react';
import Button from 'antd/lib/button';

class Home extends Component {
  render() {
    return (
      <section className="Home-section">
        <div className="go-container">
          <h1> Todo Lists </h1>
          <Button className="go-btn" href="/todolists">
            Go
          </Button>
        </div>
      </section>
    );
  }
}

export default Home;
