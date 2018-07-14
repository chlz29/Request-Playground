import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <section className="Photo-section">
        <h1> Photos Section </h1>

        <div className="photo-container -cat _spacer-md">
          <img
            className="thumbnail"
            src="http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg"
          />

          <div className="description">
            <h1>cuttie</h1>
          </div>
        </div>

        <div className="photo-container -dog">
          <img
            className="thumbnail"
            src="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
          />

          <div className="description">
            <h1>aw aw</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Photo;
