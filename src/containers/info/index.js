import React from "react";
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
            <li>This Website Is Made by Alex Lee and Mikey</li>
          </div>
          <div>
            <h1
              className="liofinfo1"
              style={{
                fontStyle: "Italic"
              }}
            >
              About Art Commissions
            </h1>
            <h1
              style={{
                fontStyle: "italic",
                fontSize: "2rem"
              }}
            >
              For any art commissions, please submit them to:
            </h1>
            <li>{`jihwan.alex.lee@gmail.com`}</li>
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
              You may feature my arts. However, it is necessary to give credits.
            </li>
          </div>
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
