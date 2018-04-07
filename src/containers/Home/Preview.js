import React, { Component } from "react";
import Video from "../../components/Video";
import banner_2 from "../../img/Screenshot_2018-03-31-15-37-57.png";
import Image from "../../components/Image";
import Bot from "../../components/Bot";
import Audio from "react-audioplayer";
import Clock from "./Clock";
import "./Clock.css";
import { css } from "emotion";

export default class Preview extends Component {
  state = {
    titleColor: "rgb(237, 125, 40)"
  };
  render() {
    const { titleColor } = this.state;
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 2rem;
          padding-right: 2rem;
          h2 {
            font-weight: bold;
          }
          h1 {
            margin: 0;
          }
          button {
            padding: 2rem;
            font-size: 1.7rem;
            color: #fff;
            background: rgb(0, 205, 249);
            margin: 1rem 0;
            border-radius: 10rem;
            border: 1px solid rgb(0, 205, 249);
            &:hover {
              background: rgb(0, 184, 250);
              border-color: rgb(24, 184, 250);
            }
          }
        `}
      >
        <div>
          <Clock />
        </div>
        <div
          style={{
            borderTop: "20px solid #000"
          }}
        >
          <h2>Subcribe For:</h2>
        </div>
        <div
          style={{
            fontSize: "3rem",
            fontFamily: "Impact, Charcoal, sans-serif",
            color: titleColor
          }}
        >
          <h1
            className={css`
              font-size: 45px;
              transition-property: font-size, color;
              transition-duration: 2s;
              transition-delay: 0s;
              &:hover {
                font-size: 50px;
                color: rgb(100, 194, 231);
              }
            `}
          >
            More Videos
          </h1>
        </div>
        <button onClick={this.onColorChange}>
          Click Me To Change The Text Above To Another Random Color
        </button>
        <div
          className={css`
            display: flex;
            width: 100;
            flex-direction: column;
          `}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderTop: "20px solid #000",
              borderLeft: "30px solid #474647",
              borderBottom: "20px solid #000"
            }}
          >
            <Image src={banner_2} />
          </div>
          <Bot />
          <div
            className={css`
              border-top: 10px solid #000;
              font-family: Impact, Charcoal, sans-serif;
              font-size: 5rem;
              display: flex;
              justify-content: center;
              margin-bottom: 1.5rem;
            `}
          >
            Recent Video
          </div>
          <div className="BetterVideo">
            <iframe
              width="680"
              height="415"
              src="https://www.youtube.com/embed/ui2IiIwvcRE"
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
    );
  }

  onColorChange = () => {
    // Math.random() gives a random number between 0 and 1 (0.32321 0.111 0.99999)
    // Math.floor(2123.434324324324) equals 13
    // const colors = ['pink', 'blue', 'red'] then colors[0] === 'pink' colors[1] === 'blue'
    const colors = [
      "pink",
      "red",
      "purple",
      "rgb(237, 125, 40)",
      "lime",
      "orange"
    ];
    let number = Math.random() * colors.length;
    this.setState({ titleColor: colors[Math.floor(number)] });
  };
}
