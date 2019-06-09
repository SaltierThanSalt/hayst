import React, { useState } from "react";

export default function Chat() {
  const [messages] = useState([
    { id: 1, userId: 1, username: "mikey", message: "hi" },
    { id: 2, userId: 2, username: "hayst", message: "yee??" },
    { id: 3, userId: 1, username: "mikey", message: "hi" },
    { id: 4, userId: 2, username: "hayst", message: "yee???" },
    { id: 5, userId: 1, username: "mikey", message: "hi" }
  ]);
  return (
    <div
      style={{ display: "flex", border: "1px solid green", height: "55rem" }}
    >
      <div style={{ border: "1px solid red", width: "25rem" }}>
        this is the left menu (chatrooms)
      </div>
      <div
        style={{
          border: "3px solid blue",
          width: "CALC(100% - 25rem)",
          height: "100%"
        }}
      >
        <div style={{ border: "1px solid black", height: "CALC(100% - 7rem)" }}>
          {messages.map(message => (
            <div key={message.id}>
              {message.username} {message.message}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            height: "7rem"
          }}
        >
          <input
            placeholder="Enter some text so this place does not look so empty so yea"
            style={{
              width: "100%",
              height: "5rem",
              marginLeft: "1rem",
              marginRight: "1rem"
            }}
          />
        </div>
      </div>
    </div>
  );
}
