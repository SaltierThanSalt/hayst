import React from "react";
import randomimage1 from "../../img/mc_char_looking_left.png";
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
            <li>This Website Is Made Using React</li>
            <li>This Website Is Made By A 5th Grader (2017)</li>
            <li>
              Did You Know That This Website Was Made Originally For My Novel
              Book?
            </li>
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
            <li>{`The very first video game I've ever played is AngryBirds.`}</li>
            <li>
              I Was The First One To Upload A Minecraft StoryMode Season 1
              Episode 4 Gameplay.
            </li>
            <li>I Used To Upload Minecraft PE Videos.</li>
          </div>
          <div>
            <h1
              style={{
                fontStyle: "Italic"
              }}
            >
              About How You Should Use Shop Materials
            </h1>
            <li>
              All Rights Belongs To Hayst. These Materials Should Not Be Abused.
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
          Copyright Hayst 2018
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
