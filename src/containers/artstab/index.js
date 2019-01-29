import React from "react";
import Image from "../../components/Image";
import art1 from "../../img/spiderham.png";
import art2 from "../../img/miles.png";
import art3 from "../../img/yasanoobss.png";
import art4 from "../../img/thanosbyhayst.png";
import art5 from "../../img/milesxgwenpic.png";
import { css } from "emotion";

export default function Arts() {
  return (
    <div
      className="artsmain"
      style={{
        backgroundColor: "black"
      }}
    >
      <h2
        className="titleofartsssss"
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "solid 5px white",
          color: "white"
        }}
      >
        {`Hayst's Art Section`}
      </h2>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Miles Morales x Gwen Stacy
      </h1>
      <div
        style={{
          width: "50%"
        }}
      >
        <Image
          className={css`
            size: 30%;
          `}
          src={art5}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Spider-Ham from Spiderman: Into the Spider-verse
      </h1>
      <div
        style={{
          width: "50%"
        }}
      >
        <Image
          className={css`
            size: 30%;
          `}
          src={art1}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Max Drawing Drawn With A Mouse
      </h1>
      <div
        style={{
          width: "50%"
        }}
      >
        <Image src={art3} />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Dats Impassible Miles Morales Drawing
      </h1>
      <div
        style={{
          width: "50%"
        }}
      >
        <Image src={art2} />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Thanos Drawing By Hayst
      </h1>
      <div
        style={{
          width: "50%"
        }}
      >
        <Image src={art4} />
      </div>
      <div
        style={{
          borderTop: "90px solid black",
          display: "flex",
          justifyContent: "center",
          color: "white"
        }}
      >
        Copyright Hayst 2018
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
