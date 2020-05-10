import React from "react";
import { css } from "emotion";
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
          display: flex;
          justify-content: center;
          color: black;
          font-size: 10rem;
          line-height: 1;
          transition: font-size 2s;
          &:hover {
            font-size: 15rem;
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
        {`Synopsis: Two assholes trying to socialize until the pain repeats.`}
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
