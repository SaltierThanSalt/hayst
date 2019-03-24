import React from "react";
import { css } from "emotion";
import previewlogo from "../../img/mazerunnerlogopreview.png";
import Image from "../../components/Image";
export default function RecentUploads() {
  return (
    <div
      className={css`
        background-color: black;
        font-family: Impact, Charcoal, sens-sarif;
      `}
    >
      <div
        className={css`
          margin-left: 2rem;
          margin-right: 2rem;
          transition-duration: 1.5s;
          transition-delay: 0s;
          display: flex;
          justify-content: center;
          color: white;
          font-size: 6rem;
          &:hover {
            font-size: 9rem;
          }
        `}
      >
        MC MAZERUNNER THE DEATH CURE
      </div>
      <div
        className={css`
          margin-left: 2rem;
          margin-right: 2rem;
          border-bottom: 2rem solid white;
          display: flex;
          justify-content: center;
          color: white;
          font-size: 7rem;
        `}
      >
        Made By Hayst
      </div>
      <div
        className={css`
          margin-left: 2rem;
          margin-right: 2rem;
          display: flex;
          justify-content: center;
          color: grey;
          font-size: 5rem;
        `}
      >
        (Previews)
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={previewlogo} />
      </div>
      <div
        className={css`
          border-bottom: 12rem solid black;
          margin-left: 10rem;
          margin-right: 10rem;
          display: flex;
          justify-content: center;
          color: white;
          font-size: 4rem;
        `}
      >
        Story: Immunes are placed in the third trial and even if the group
        WICKED convinces the immunes that they are trying to save humanity, the
        immunes plan on an escape and plans on taking down WICKED once and for
        all.
      </div>
      <div
        className={css`
          border-top: 2rem solid white;
          margin-left: 2rem;
          margin-right: 2rem;
          display: flex;
          justify-content: center;
          color: white;
          font-size: 7rem;
        `}
      >
        DO YOU WANT TO WATCH THE PART 0.5 EARLY?
      </div>
      <div
        className={css`
          margin-left: 2rem;
          margin-right: 2rem;
          border-bottom: 2rem solid white;
          display: flex;
          justify-content: center;
          color: white;
          font-size: 5rem;
        `}
      >
        Be the first to watch it on Instagram! (Instagram in social medias)
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center"
        }}
      >
        © Copyright Hayst 2018
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
  );
}
