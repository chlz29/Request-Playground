import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

class Home extends Component {
  render() {
    return (
      <section className="Home-section">
        <div className="homepage">
          <img className="personalLogo" src="https://i.imgur.com/rUb9F3B.png" />
        </div>
        <div className="todo-container">
          <h1>
            <Icon type="form" /> Todo Lists{' '}
          </h1>
          <Button className="go-btn" href="/todolists">
            Go
          </Button>
        </div>
      </section>
    );
  }
}

export default Home;
