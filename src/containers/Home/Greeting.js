import React from 'react';
import { css } from 'emotion';

export default function Greeting() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        font-size: 4rem;
        font-weight: bold;
        border-bottom: 9px solid #000;
        color: rgb(300, 125, 40);
      `}
    >
      Welcome to the official website of Hayst Studios
    </div>
  );
}
