import React from "react";
import randomimage1 from "../../img/mc_char_looking_left.png";
import Image from "../../components/Image";

export default function Information() {
  return (
    <div>
      <div>
        <h1
          className="headerofinfo1"
          style={{
            borderBottom: "10px solid #474647",
            borderTop: "10px solid #474647"
          }}
        >
          INFO
        </h1>
      </div>
      <div>
        <h1
          className="liofinfo1"
          style={{
            fontStyle: "Italic"
          }}
        >
          About This Website
        </h1>
        <div
          style={{
            float: "right"
          }}
        >
          <Image 
            className="thingyt"
            src={randomimage1} />
        </div>
        <li className="liofinfo2">This Website Is Made Using React</li>
        <li className="liofinfo2">
          This Website Is Made By A 5th Grader (2017)
        </li>
        <li className="liofinfo2">
          Did You Know That This Website Was Made Originally For My Novel Book?
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
        <li className="liofinfo2">
          The very first video game I've ever played is AngryBirds.
        </li>
        <li className="liofinfo2">
          I Was The First One To Upload A Minecraft StoryMode
          Season 1 Episode 4 Gameplay.
        </li>
        <li className="liofinfo2">
          I Used To Upload Minecraft PE Videos.
        </li>
      </div>
      <div>
        <h1
          className="liofinfo1"
          style={{
            fontStyle: "Italic"
          }}
        >
          About How You Should Use Shop Materials
        </h1>
        <li className="liofinfo2">
          All Rights Belongs To Hayst. These Materials Should Not Be Abused.
        </li>
      </div>
      <div
        style={{
          borderTop: "90px solid #ffffff",
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
  );
}
