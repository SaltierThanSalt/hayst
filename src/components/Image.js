import React from "react";
import PropTypes from "prop-types";

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};
export default function Image({ src, style, className }) {
  return (
    <img
      alt=""
      src={src}
      style={{
        width: "100%",
        ...style
      }}
      className={className}
      rel=""
    />
  );
}
