import React, { Component } from "react";
import { css } from 'emotion';

export default class Bot extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1
          className={css`
            margin-top: 1rem;
          `}
        >
          Here Is A Place You Can Chat.{" "}
        </h1>
        <input
          placeholder="Ex) Hello There! General Kenobi!"
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
