import React, { Component } from "react";
import MsgBoard from "./MsgBoard";
import Clock from "../Clock";
import Image from "../../../components/Image";
import title from "../../../img/meatthe.png";
import "../Clock.css";
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
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 6rem;
          padding-right: 6rem;
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
            margin: 3rem 0;
            border-radius: 10rem;
            border: 1px solid rgb(0, 205, 249);
            &:hover {
              background: rgb(0, 184, 250);
              border-color: rgb(24, 184, 250);
            }
          }
        `}
      >
        <div
          style={{
            borderTop: "10px solid gray",
            borderBottom: "20px solid gray"
          }}
        >
          <Clock />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            font-size: 10rem;
            font-weight: bold;
          `}
        >
          About Hayst:
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: bold;
            padding: 2rem;
          `}
        >
          I upload videos in my Youtube channel only with a little more than 900
          subscribers but I still make them for fun even though I think of
          quitting a lot. My real name is Alex Lee and I'm 12 years old and I
          really like Arts.
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image style={{ width: "50%" }} src={title} />
        </div>
        <div
          className={css`
          border-top: 100px solid black 
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 20px solid gray;
        `}
        >
          <h2>Subcribe For</h2>
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
              display: flex;
              width: 100;
              flex-direction: column;
              font-size: 45px;
              font-family: Impact, Charcoal, sans-serif;
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
        <div style={{ borderTop: "10px solid black" }} />
        <div
          style={{
            marginTop: "2rem"
          }}
          className="BetterVideo"
        />
        <div>
          <h1
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-content: center;
              align-items: center;
              font-size: 3rem;
              color:
              font-family: Impact, Charcoal, sans-serif;
              transition-property: font-size, color;
              transition-duration: 2s;
              transition-delay: 0s;
              &:hover {
                font-size: 50px;
                color: rgb(100, 194, 231);
              }
            `}
          >
            Recent Video
          </h1>
        </div>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem"
          }}
          className="BetterVideo"
        >
          <iframe
            width="680"
            height="415"
            src="https://www.youtube.com/embed/pmIDx_L4O0A"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div style={{ borderTop: "10px solid black" }} />
        <div
          className={css`
            display: flex;
            width: 100;
            flex-direction: column;
          `}
        >
          <div
            style={{
              marginTop: "2rem",
              height: "60rem",
              overflowY: "scroll",
              borderBottom: "90px solid ##000000"
            }}
          >
            <MsgBoard />
          </div>
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
