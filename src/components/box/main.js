import React, { Component } from "react";

import "./main.css";

class Box extends Component {
  render() {
    return (
      <div className="box">
        <h2 className="boxTitle">{this.props.title}</h2>
        <p className="boxDesc">{this.props.desc}</p>
      </div>
    );
  }
}

export default Box;
