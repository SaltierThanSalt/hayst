import React, { Component } from "react";
import "./Clock.css";
import moment from "moment";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.format = "h:mm:ss";
    this.state = {
      now: moment().format(this.format)
    };
  }

  componetnDidMount() {
    setInterval(() => {
      this.setState({
        now: moment().format(this.format)
      });
    });
  }
  render() {
    return <div className="Clock">{this.state.now}</div>;
  }
}
