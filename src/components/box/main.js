import React, { Component } from "react";

import "./main.css";

class Box extends Component {
  acessar(route) {
    console.log("route : " + route);
  }

  render() {
    return (
      <div className="box" onClick={() => this.acessar(this.props.route)}>
        <h2 className="boxTitle">{this.props.title}</h2>
        <p className="boxDesc">{this.props.desc}</p>
      </div>
    );
  }
}

export default Box;
