import React from "react";
import Image from "../../components/Image";
import art1 from "../../img/spiderham.png";
import art2 from "../../img/miles.png";
import art3 from "../../img/yasanoobss.png";
import art4 from "../../img/thanosbyhayst.png";
import art5 from "../../img/milesxgwenpic.png";
import art6 from "../../img/colordrawing.jpg";
import art7 from "../../img/venom.jpg";
import art8 from "../../img/pikapikamuthertruckaszzz.jpg";
import art9 from "../../img/freddymercurai.jpg";
import art10 from "../../img/linkofbethofdewild.jpg";
import art11 from "../../img/ruburtdawnyjuniur.jpg";
import art12 from "../../img/milezmuralez.jpg";
import art13 from "../../img/leunardudadolly.jpg";
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
        The Colorful Heaven
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
          src={art6}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Venom
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
          src={art7}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Iron Man From Infinity War
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
          src={art11}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Pikachu
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
          src={art8}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Leonardo Da Vinci
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
          src={art13}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Freedy Mercury
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
          src={art9}
        />
      </div>
      <h1
        className="Anything"
        style={{
          color: "white"
        }}
      >
        Miles Morales Spider-man
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
          src={art12}
        />
      </div>
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
        Link Of BOTW
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
          src={art10}
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
