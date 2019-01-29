import React from "react";
import PropTypes from "prop-types";

Video.propTypes = {
  videoCode: PropTypes.string.isRequired
};
export default function Video({ videoCode }) {
  return (
    <iframe
      width="1945"
      height="700"
      className="VideoStuff"
      src={`https://www.youtube.com/embed/${videoCode}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}
