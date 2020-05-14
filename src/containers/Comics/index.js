import React from "react";
import { css } from "emotion";
import Image from "../../components/Image";
import art39 from "../../img/coverofwebtoon.jpg";
export default function Arts() {
  return (
    <div
      className={css`
        background-color: white;
        font-family: Impact, Charcoal, "Helvetica Neue";
        font-weight: bold;
      `}
    >
      <div
        className={css`
          padding-top: 1rem;
          margin-left: 2rem;
          margin-right: 2rem;
          padding-bottom: 3rem;
          display: flex;
          justify-content: center;
          color: black;
          font-size: 10rem;
          line-height: 1;
          transition-property: font-size, color;
          transition-duration: 2s;
          transition-delay: 0s;
          &:hover {
            font-size: 15rem;
            color: #7ed957;
          }
        `}
      >
        Again & Again
      </div>
      <div
        className={css`
          line-height: 2;
          font-size: 2.5rem;
          border-bottom: 2rem solid white;
          display: flex;
          justify-content: center;
          color: black;
        `}
      >
        Again & Again is a webtoon series in progress in the Webtoon comic
        website.
      </div>
      <div>
        <div
          style={{
            width: "100%",
            size: "100",
            flexDirection: "column",
            alignItems: "center",
            display: "flex"
          }}
        >
          <a
            style={{ color: "#A9A9A9" }}
            href="https://www.webtoons.com/en/challenge/again-again-h/list?title_no=435648"
          >
            <Image src={art39} />
          </a>
        </div>{" "}
      </div>
      <div
        className={css`
          line-height: 2;
          font-size: 3rem;
          margin-left: 2rem;
          margin-right: 2rem;
          display: flex;
          justify-content: center;
          color: grey;
        `}
      >
        (Preview)
      </div>
      <div
        className={css`
          border-bottom: 12rem solid white;
          margin-left: 10rem;
          margin-right: 10rem;
          display: flex;
          justify-content: center;
          color: black;
        `}
      >
        {`Synopsis: Three teenagers trying to socialize with the world.`}
      </div>
      <div>
        <div
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center"
          }}
        >
          © Copyright Hayst 2020
        </div>
        <div
          style={{
            color: "white",
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
