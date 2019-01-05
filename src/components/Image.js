import React from "react";

export default function Image({src, style, className }) {
  return (
      <img
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
