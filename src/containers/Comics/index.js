import React from "react";
import { css } from "emotion";
import Image from "../../components/Image";
import preview1 from "../../img/heroesnewp1.png";
import preview2 from "../../img/heroesnewp2.png";
import preview3 from "../../img/heroesnewp3.png";
import cover from "../../img/heroesnewcover.png";
import preview4 from "../../img/heroesnewp4.png";
import preview5 from "../../img/heroesnewp5.png";
import preview6 from "../../img/heroesp6.png";

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
        고구규 is a korean webtoon comic that my friends and I made that centers around a boy and a girl and how they get closer. However, somethings weird about their connection. They can communicate through their minds.  
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
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={cover} />
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={preview1} />
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={preview2} />
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={preview3} />
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={preview4} />
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={preview5} />
      </div>
      <div
        className={css`
          padding-left: 6rem;
          padding-right: 6rem;
        `}
      >
        <Image src={preview6} />
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
        {`Story: The Main Character Is Searching For The Strongest Weapon In The
        World For The Military Of StickVille, His Home. But As He Meets A Group
        Of Super Heros With Their Own Particular Powers, He Starts To Think Of
        Jo ining The Group To Help Keep Peace In The Alternative-Verses By
        Keeping The Uni-Pearl Safe, But As They Go Through Some Hardships, Some
        Death Came Along The Journey...`}
      </div>
      <div>
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
    </div>
  );
}
