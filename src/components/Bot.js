import React, { Component } from "react";

export default class Bot extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Talk to me. I'm Your Manager </h1>
        <input
          placeholder="Hello, Say Anything You Want."
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "2em"
          }}
          className="form-control"
        />
      </div>
    );
  }
}
