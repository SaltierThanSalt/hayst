import React from "react";
import { css } from "emotion";
import { location } from "react-router-dom";

export default function Greeting() {
  return (
    <div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-content: center;
          align-items: center;
          font-size: 2.4rem;
          font-weight: bold;
          color: rgb(300, 125, 40);
          margin-top: 2rem;
          margin-bottom: 2rem;
          transition-property: font-size;
          transition-duration: 2s;
          transition-delay: 0s;
          &:hover {
            font-size: 4.5rem;
          }
        `}
      >
        H A Y T E R S I T E . C O M
      </div>
    </div>
  );
}
