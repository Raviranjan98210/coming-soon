import React from "react";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Youtimo</a>
          </div>
          <div className="social">
            <h1 style={{ textAlign: "center", fontWeight: "800", fontSize: "20px" }}>
              6003543391
            </h1>
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
          <a href="mailto:youtimoindia@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  };
}

export default App;
