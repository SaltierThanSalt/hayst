import React from 'react';
import { css } from 'emotion';

export default function Greetings() {
  return (
    <div
      className={css`
        padding: 1rem;
        border-bottom: 1rem solid #000;
        p {
          font-size: 2rem;
          margin-bottom: 0;
        }
      `}
    >
      <p>For My Subscribers</p>
      <p>
        and the best teacher ever, Mikey
      </p>
    </div>
  );
}
