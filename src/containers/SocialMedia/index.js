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
        </div>
        <div
          style={{
            borderTop: "90px solid #ffffff",
            display: "flex",
            justifyContent: "center",
            color: "white"
          }}
        >
          Copyright Hayst 2017
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
