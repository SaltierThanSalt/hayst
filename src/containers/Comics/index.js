import React from "react";
import { css } from "emotion";
export default function Arts() {
  return (
    <div
      className={css`
        background-color: black;
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
          color: white;
          font-size: 10rem;
          line-height: 1;
          transition: font-size 2s;
          &:hover {
            font-size: 15rem;
          }
        `}
      >
        고구규 (adding logo later)
      </div>
      <div
        className={css`
          line-height: 2;
          font-size: 2.5rem;
          border-bottom: 2rem solid white;
          display: flex;
          justify-content: center;
          color: white;
        `}
      >
        고구규 is a korean webtoon comic that my friends and I made that centers
        around a boy and a girl and how they get closer. However, somethings
        weird about their connection. They can communicate through their minds.
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
          border-bottom: 12rem solid black;
          margin-left: 10rem;
          margin-right: 10rem;
          display: flex;
          justify-content: center;
          color: white;
        `}
      >
        {`Story: The main character starts to have telepathic connections with a girl that he formaly knew in middle school, and they realize they're going to end up in the exact place where they left each other. Heartbroken.`}
      </div>
      <div>
        <div
          style={{
            color: "white",
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
