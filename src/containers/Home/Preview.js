import React, { Component } from "react";
import Video from "../../components/Video";
import P1 from "../../img/wh.png";
import P2 from "../../img/2nd_page.png";
import P3 from "../../img/3rd_page.png";
import P4 from "../../img/4th_page.png";
import P5 from "../../img/5th_page.png";
import P6 from "../../img/6th_page.png";
import P7 from "../../img/7th_page.png";
import P8 from "../../img/whatttt.png";
import Image from "../../Image";
import Bot from "../../components/Bot";
import Audio from "react-audioplayer";
import Clock from "./Clock";
import "./Clock.css";

export default class Preview extends Component {
  constructor() {
    super();
    this.state = {
      titleColor: "rgb(237, 125, 40)"
    };
    this.onColorChange = this.onColorChange.bind(this);
  }
  render() {
    const { titleColor } = this.state;
    return (
      <div
          className="HaystNewb">
        <div>
          <Clock />
        </div>
        <div
          style={{
            borderTop: "20px solid #000"
          }}
        >
          <h12> Subcribe For </h12>
        </div>
        <div
          style={{
            fontSize: "4vw",
            fontFamily: "Impact, Charcoal, sans-serif",
            color: titleColor
          }}
        >
          <h1 className="h1appjs">More Cool Videos</h1>
        </div>
        <div className="btn btn-success" onClick={this.onColorChange}>
          Click Me To Change The Text To Another Random Color
        </div>
        <div className="App-intro">
          <div
            className="left"
            style={{
              borderTop: "20px solid #000",
              borderLeft: "30px solid #474647",
              borderBottom: "20px solid #000",
              float: "left",
              width: "50%"
            }}
          >
            <Image src={P1} />
          </div>
          <div
            className="right"
            style={{
              borderTop: "20px solid #000",
              borderLeft: "20px solid #000",
              borderBottom: "20px solid #000",
              borderRight: "30px solid #474647",
              float: "right",
              width: "50%"
            }}
          >
            <Image src={P8} />
          </div>
          <div
            className="right col-xs-12"
            style={{
              position: "center",
              borderTop: "40px solid #000",
              borderBottom: "20px solid #001",
              float: "center center"
            }}
          >
            <Bot />
            <div
              style={{
                borderTop: "10px solid #000"
              }}
            >
              <h16>My Recent Videos</h16>
            </div>
            <div className="BetterVideo">
              <iframe
                width="680"
                height="415"
                src="https://www.youtube.com/embed/IUo3zWTcXCA"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div
              style={{
                borderTop: "90px solid #ffffff",
                display: "flex",
                justifyContent: "center"
              }}
            >
              © Copyright Hayst 2018
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }

  onColorChange() {
    // Math.random() gives a random number between 0 and 1 (0.32321 0.111 0.99999)
    // Math.floor(2123.434324324324) equals 13
    // const colors = ['pink', 'blue', 'red'] then colors[0] === 'pink' colors[1] === 'blue'
    const colors = [
      "blue",
      "pink",
      "red",
      "purple",
      "rgb(237, 125, 40)",
      "lime",
      "orange"
    ];
    let number = Math.random() * colors.length;
    this.setState({ titleColor: colors[Math.floor(number)] });
  }
}
