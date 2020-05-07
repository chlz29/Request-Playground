import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <section className="Photo-section">
        <h1> Photos Section </h1>

        <div className="photo-container -cat _spacer-md">
          <img
            className="thumbnail"
            src="https://images.unsplash.com/photo-1588621332104-5e128b074d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />

          <div className="description">
            <h1>Cat</h1>
          </div>
        </div>

        <div className="photo-container -dog">
          <img
            className="thumbnail"
            src="https://images.unsplash.com/photo-1588619095585-5bc682a45ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1551&q=80"
          />

          <div className="description">
            <h1>Bird</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Photo;
