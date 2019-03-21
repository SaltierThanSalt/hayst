import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default function Button({ children, onClick, style }) {
  return (
    <button
      className={css`
        border: 1px solid gray;
        width: auto;
        cursor: pointer;
        border-radius: 5px;
        font-size: 2rem;
        &:hover {
          background: #eee;
        }
        &:focus {
          outline: none;
        }
      `}
      style={style}
      onClick={event => {
        onClick();
        event.currentTarget.blur();
      }}
    >
      {children}
    </button>
  );
}
