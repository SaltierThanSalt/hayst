import React, { Component } from "react";
import MsgBoard from "./MsgBoard";
import Clock from "../Clock";
import Image from "../../../components/Image";
import title from "../../../img/channelstatus.png";
import heartsforeunbin from "../../../img/pink-emoji-hearts.png";
import "../Clock.css";
import { css } from "emotion";

export default class Preview extends Component {
  state = {
    titleColor: "rgb(237, 125, 40)"
  };
  render() {
    const { titleColor } = this.state;
    let today = Math.floor(Date.now() / 1000);
    const date = new Date("January 8, 2020");
    const theDay = Math.floor(date.getTime() / 1000);

    return (
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-top: 20px solid gray;
          border-left: 10px solid silver;
          padding-left: 5rem;
          font-family: sans-serif;
          h2 {
            font-weight: bold;
          }
          h1 {
            margin: 0;
          }
          button {
            padding: 2rem;
            color: #fff;
            background: rgb(0, 205, 249);
            margin: 3rem 0;
            border-radius: 5rem;
            border: 1px solid rgb(0, 205, 249);
            &:hover {
              background: rgb(0, 184, 250);
              border-color: rgb(24, 184, 250);
            }
          }
        `}
      >
        <div style={{ marginTop: "3rem" }}>
          <div
            className={css`
              color: #333;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-content: center;
              align-items: center;
              font-weight: bold;
              font-size: 6rem;
            `}
          >
            ABOUT HAYST
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "5rem"
            }}
          >
            <div
              className={css`
                display: flex;
                width: 50%;
                flex-direction: column;
                justify-content: center;
                font-size: 2rem;
                font-weight: bold;
              `}
            >
              {`I upload videos in my Youtube channel only with a little more than
            1000 subscribers. I'm 13 years old and I
            really like drawing.`}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            paddingBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image style={{ width: "50%" }} src={title} />
        </div>
        <div
          className={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            button {
              padding: 2rem;
              font-size: 1.7rem;
              color: #fff;
              background: rgb(0, 205, 249);
              margin: 3rem 0;
              border-radius: 5rem;
              border: 1px solid rgb(0, 205, 249);
              &:hover {
                background: rgb(0, 184, 250);
                border-color: rgb(24, 184, 250);
              }
            }
          `}
        >
          <button
            style={{
              width: "CALC(100% - 6rem)",
              marginLeft: "3rem",
              marginRight: "3rem",
              cursor: "pointer",
              fontWeight: "bold",
              color: "white"
            }}
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw",
                "_blank"
              )
            }
          >
            VISIT THE CHANNEL
          </button>
        </div>
        <div style={{ borderBottom: "20px solid gray" }} />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 3.5rem;
            font-weight: bold;
            margin-top: 2rem;
          `}
        >
          Subcribe For
        </div>
        <div
          style={{
            fontFamily: "Impact, Charcoal, sans-serif",
            color: titleColor,
            textAlign: "center"
          }}
        >
          <h1
            className={css`
              display: flex;
              width: 100;
              flex-direction: column;
              font-size: 4.5rem;
              font-family: Impact, Charcoal, sans-serif;
              transition-property: font-size, color;
              transition-duration: 2s;
              transition-delay: 0s;
              &:hover {
                font-size: 7rem;
                color: rgb(100, 194, 231);
              }
            `}
          >
            More Videos
          </h1>
        </div>
        <button
          style={{
            width: "CALC(100% - 6rem)",
            margin: "2rem 3rem 2rem 3rem",
            cursor: "pointer",
            fontSize: "2rem"
          }}
          onClick={this.onColorChange}
        >
          Click Me To Change The Text Above To Another Random Color
        </button>
        <div style={{ borderTop: "10px solid black" }} />
        <div
          className={css`
            margin-top: 2rem;
            display: flex;
            font-weight: bold;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            font-size: 3.5rem;
            color:
            font-family: Impact, Charcoal, sans-serif;
            transition-property: font-size, color;
            transition-duration: 2s;
            transition-delay: 0s;
            &:hover {
              font-size: 5rem;
              color: rgb(100, 194, 231);
            }
          `}
        >
          Recent Video
        </div>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <iframe
            title="bettervid"
            width="680"
            height="415"
            src="https://www.youtube.com/embed/3_BrGzriVQg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div
          style={{
            borderTop: "10px solid gray",
            borderBottom: "20px solid gray"
          }}
        >
          <Clock />
        </div>
        <div />
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
              borderBottom: "20px solid grey"
            }}
          >
            <MsgBoard />
          </div>
        </div>
        <div>
          <div
            className={css`
              display: flex;
              width: 100;
              flex-direction: column;
              align-items: center;
              font-size: 5rem;
              margin-top: 1rem;
            `}
          >
            D+{Math.floor((today - theDay) / (60 * 60 * 24))}
          </div>
          <div
            className={css`
              display: flex;
              width: 100%;
              font-size: 3rem;
              flex-direction: column;
              align-items: center;
              font-style: italic;
              font-weight: sans;
            `}
          >
            ilyttmab
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 20px;
              border-bottom: 20px solid grey;
            `}
          >
            <Image
              style={{
                width: "20rem"
              }}
              src={heartsforeunbin}
            />
          </div>
        </div>
        <div style={{ paddingBottom: "1.5rem" }}>
          <div
            style={{
              borderTop: "90px solid #ffffff",
              display: "flex",
              justifyContent: "center"
            }}
          >
            © Copyright Hayst 2020
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
