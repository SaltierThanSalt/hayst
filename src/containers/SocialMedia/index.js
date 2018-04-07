import React from "react";
import ytlogo from "../../img/yt.png";
import Image from "../../components/Image";
import { css } from "emotion";

export default function SocialMedia() {
  return (
    <div
      style={{
        backgroundColor: "black"
      }}
    >
      <div>
        <div
          className="titleofsocialmedia"
          style={{
            color: "white",
            fontStyle: "italic",
            borderBottom: "5px solid white"
          }}
        >
          Social Medias
        </div>
        <div>
          <h1
            className="lolsocialmediamc"
            style={{
              position: "center"
            }}
          >
            Minecraft Username: Hayst
          </h1>
          <h1
            className={css`
              display: flex;
              justify-content: center;
              position: center;
              color: skyblue;
              border-bottom: 5px solid white;
              font-family: Impact, Charcoal, sens-sarif;
              `}
          >
            Rank: MVP +
          </h1>
        </div>
        <div
          className={css`
            font-size: 2rem;
            display: flex;
            justify-content: center;
          `}
        >
          <a
            className="wassaphi"
            href="https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw"
            style={{
              fontStyle: "Bold"
            }}
          >
            <h1>Click Here To Visit My</h1>
            <h12
              className={css`
                position: center;
                color: red;
                font-size: 7rem;
                padding-left: 9rem;
                font-family: Impact, Charcoal, sans-serif;
              `}
            >
              You
            </h12>
            <h12
              className={css`
                position: center;
                color: white;
                font-size: 7rem;
                font-family: Impact, Charcoal, sans-serif;
              `}
            >
              tube
            </h12>
          </a>
        </div>
        <div
          className="twitter__socialmedia"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "15rem",
            fontFamily: "Impact, Charcoal, sens-sarif",
            color: "skyblue",
            marginLeft: "9rem",
            marginRight: "9rem",
            borderTop: "1.2rem solid white",
          }}>
          <a
            href="https://twitter.com/Hayter_YT"
          >
            Twitter
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white"
          }}
        >
          © Copyright Hayst 2018
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white"
          }}
        >
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
