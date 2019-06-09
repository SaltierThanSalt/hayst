import React from "react";
import { css } from "emotion";

export default function Greeting() {
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        font-size: 2.4rem;
        font-weight: bold;
        color: rgb(300, 125, 40);
        margin-bottom: 2rem;
        transition: font-size 2s;
        &:hover {
          font-size: 4.5rem;
        }
      `}
    >
      H A Y T E R S I T E . C O M
    </div>
  );
}
