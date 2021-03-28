import React from "react";

import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Youtimo</a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>We are coming soon.</h1>
            <p>
              Website coming soon. Please check back to know more. Shoot us an email if
              you're curious.
            </p>
          </div>
          <a href="tel:+916003543391">
            <div className="cta">Call Us</div>
          </a>
        </div>
      </div>
    );
  };
}

export default App;
