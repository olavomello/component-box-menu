import React, { Component } from "react";

import "./main.css";

class Box extends Component {
  // Click action
  acessar(route, url) {
    // Check if button is an URL or ROUTE
    if (route) {
      // ROUTE
      console.log("Route : " + route);
    } else {
      // URL
      console.log("URL : " + url);
      location = url;
    }
  }

  render() {
    return (
      <div
        className="box"
        onClick={() => this.acessar(this.props.route, this.props.url)}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Box;
