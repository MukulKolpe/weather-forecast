import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div className="text-center">
        <p className="lead">{this.props.error}</p>
      </div>
    );
  }
}
