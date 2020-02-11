import React from "react";
import { css } from "emotion";

export default function SocialMedia() {
  return (
    <div style={{ backgroundColor: "black", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "4rem",
            textAlign: "center",
            borderBottom: "solid 5px white",
            color: "white"
          }}
        >
          Social Media
        </div>
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          font-size: 10rem;
          color: #fff;
        `}
      >
        <a
          href="https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw"
          style={{
            fontStyle: "Bold",
            color: "white"
          }}
        >
          <span
            className={css`
              position: center;
              color: red;
              font-family: Impact, Charcoal, sans-serif;
            `}
          >
            You
          </span>
          <span
            className={css`
              position: center;
              color: white;
              font-family: Impact, Charcoal, sans-serif;
            `}
          >
            Tube
          </span>
        </a>
      </div>
      <div
        className="twitter__socialmedia"
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Impact, Charcoal, sens-sarif",
          fontSize: "10rem",
          marginLeft: "9rem",
          marginRight: "9rem",
          borderTop: "1.2rem solid white"
        }}
      >
        <a style={{ color: "#fff" }} href="https://twitter.com/Hayter_YT">
          Twitter
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Impact, Charcoal, sens-sarif",
          fontSize: "10rem",
          marginLeft: "9rem",
          marginRight: "9rem",
          borderTop: "1.2rem solid white"
        }}
      >
        <a
          style={{ color: "#fff" }}
          href="https://www.instagram.com/jihwanalexlee/"
        >
          Instagram
        </a>
      </div>
      <div style={{ paddingBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white"
          }}
        >
          © Copyright Hayst 2020
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
