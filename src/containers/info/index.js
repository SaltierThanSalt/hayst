import React from "react";
import randomimage1 from "../../img/favicon.jpg";
import Image from "../../components/Image";
import { css } from "emotion";

export default function Information() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <h1
          style={{
            background: "#43a3fd",
            borderBottom: "10px solid #474647",
            borderTop: "10px solid #474647",
            textAlign: "center"
          }}
          className={css`
            margin: 0;
            font-size: 3rem;
            transition: font-size 2s;
            &:hover {
              font-size: 5rem;
            }
          `}
        >
          INFO
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginLeft: "2rem" }}>
          <div>
            <h1
              style={{
                fontStyle: "Italic"
              }}
            >
              About This Website
            </h1>
            <li>This Website Is Made Using React JS</li>
            <li>This Website Is Mainly Used For Portfolio, Youtube, And Art</li>
          </div>
          <div>
            <h1
              className="liofinfo1"
              style={{
                fontStyle: "Italic"
              }}
            >
              About Hayst
            </h1>
            <h1
              style={{
                fontStyle: "italic",
                fontSize: "2rem"
              }}
            >
              Why I Like Drawing
            </h1>
            <li>{`This is a very often spoken answer, but it's true. 
            Drawing is mostly done for hobby, and I draw because it helps me get away with anything upsetting that happens.`}</li>
            <h1
              style={{
                fontStyle: "italic",
                fontSize: "2rem"
              }}
            >
              My Youtube
            </h1>
            <li>I Started My Youtube In August Of 2015.</li>
            <li>
              Fun (not) Fact: I got reported for including "violence" in my
              Minecraft Hide And Seek Video. This lead to my channel getting
              banned for 2 months in 2016.
            </li>
          </div>
          <div>
            <h1
              style={{
                fontStyle: "Italic"
              }}
            >
              About The Use Of My Arts
            </h1>
            <li>
              You may use my arts. However, it is necessary to give credits.
            </li>
          </div>
        </div>
        <div>
          <Image className="thingyt" src={randomimage1} />
        </div>
      </div>
      <div style={{ paddingBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          Copyright Hayst 2020
        </div>
        <div
          style={{
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
