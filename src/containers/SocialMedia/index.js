import React from "react";
import { css } from "emotion";

export default function SocialMedia() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          position: "relative"
        }}
      >
        <div
          className="titleofartsssss"
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "solid 5px white",
            color: "white"
          }}
        >
          {" "}
          Social media
        </div>
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
            fontStyle: "Bold",
            color: "white"
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
            Tube
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
          borderTop: "1.2rem solid white"
        }}
      >
        <a href="https://twitter.com/Hayter_YT">Twitter</a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "15rem",
          fontFamily: "Impact, Charcoal, sens-sarif",
          color: "skyblue",
          marginLeft: "9rem",
          marginRight: "9rem",
          borderTop: "1.2rem solid white"
        }}
      >
        <a href="https://www.instagram.com/officialhayst/">Instagram</a>
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
  );
}
