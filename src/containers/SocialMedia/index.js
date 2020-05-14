import React from "react";
import { css } from "emotion";
import Image from "../../components/Image";
import logo from "../../img/logoyoutube.png";
import logotwitter from "../../img/logotwitter.jpg";
import logoig from "../../img/logoig.jpg";

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
            paddingTop: "2rem",
            paddingBottom: "2rem",
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
          font-size: 8rem;
          color: #fff;
        `}
      >
        <a
          href="https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw"
          style={{
            fontFamily: "Impact, Charcoal, sans-serif",
            color: "white"
          }}
        >
          <span
            className={css`
              position: center;
              color: red;
              font-family: Impact, sans-serif;
            `}
          >
            You
          </span>
          <span
            className={css`
              position: center;
              color: white;
              font-family: Impact, sans-serif;
            `}
          >
            tube
          </span>
        </a>
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-bottom: 4rem;
        `}
      >
        <Image style={{ width: "10%" }} src={logo} />
      </div>
      <div
        className="twitter__socialmedia"
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "8rem",
          marginLeft: "9rem",
          marginRight: "9rem",
          borderTop: "1.2rem solid gray"
        }}
      >
        <a style={{ color: "#fff" }} href="https://twitter.com/AlexLee14325116">
          Twitter
        </a>
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-bottom: 4rem;
        `}
      >
        <Image style={{ width: "10%" }} src={logotwitter} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "8rem",
          marginLeft: "9rem",
          marginRight: "9rem",
          borderTop: "1.2rem solid gray"
        }}
      >
        <a
          style={{ color: "#fff" }}
          href="https://www.instagram.com/jihwanalexlee/"
        >
          Instagram
        </a>
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-bottom: 4rem;
        `}
      >
        <Image style={{ width: "10%" }} src={logoig} />
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
