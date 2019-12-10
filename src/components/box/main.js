import React, { Component } from "react";

import "./main.css";

class Box extends Component {
  // Router
  state = {
    navigate: false,
    route: ""
  };

  // Click action
  go(route, url) {
    // Check if button is an URL or ROUTE
    if (route) {
      // ROUTE
      console.log("Access Route : " + route);
      this.setState({
        navigate: true,
        route: this.route
      });
    } else {
      // URL
      console.log("Goto URL : " + url);
      window.location = url;
    }
  }

  render() {
    return (
      <div
        className="box"
        onClick={() => this.go(this.props.route, this.props.url)}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Box;
