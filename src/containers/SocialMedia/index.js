import React from "react";
import ytlogo from "../../img/yt.png";
import Image from "../../Image";

export default function SocialMedia() {
  return (
    <div
      style={{
        backgroundColor: "black"
      }}
    >
      <div>
        <div
          className="titleofsocialmedia"
          style={{
            color: "white",
            fontStyle: "italic",
            borderBottom: "5px solid white"
          }}
        >
          Social Medias
        </div>
        <div>
          <h1
            className="lolsocialmediamc"
            style={{
              position: "center"
            }}
          >
            Minecraft Username: Hayst
          </h1>
          <h1
            className="lolsocialmediamcrank"
            style={{
              position: "center",
              color: "skyblue",
              borderBottom: "5px solid white"
            }}
          >
            Rank: MVP ++
          </h1>
        </div>
        <div
            className="Channelyaysm"
          style={{
            size: "2px",
            borderBottom: "2px solid white"
          }}
        >
          <a
            className="wassaphi"
            href="https://www.youtube.com/channel/UCZWCelWub5JK_6J3qZOiFAw"
            style={{
              fontStyle: "Bold"
            }}
          >
            <h1>Click Here To Visit My</h1>
            <h12
              className="lolsocialmediayt"
              style={{
                position: "center",
                color: "red"
              }}
            >
              You
            </h12>
            <h12
              className="lolsocialmediayt"
              style={{
                position: "center",
                color: "white"
              }}
            >
              tube
            </h12>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white"
          }}
        >
          © Copyright Hayst 2018
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
    </div>
  );
}
