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
        font-size: 3rem;
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
      Welcome to Hayst's Website
    </div>
  );
}