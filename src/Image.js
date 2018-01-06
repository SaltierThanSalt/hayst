import React from "react";

export default function Image({ src }) {
  return (
    <div>
      <img
        src={src}
        style={{
          width: "40em"
        }}
        rel=""
      />
    </div>
  );
}
