import React, { useEffect, useState } from "react";
import { css } from "emotion";
import request from "axios";
import URL from "../../../constants/URL";

export default function MsgBoard() {
  const [inputText, setInputText] = useState("");
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    init();
    async function init() {
      const { data } = await request.get(`${URL}/posts`);
      setMsgs(data);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <div
        className={css`
          font-size: 3.5rem;
          font-weight: bold;
          margin-top: 1rem;
        `}
      >
        Message Board
      </div>
      <div style={{ width: "100%" }}>
        <input
          value={inputText}
          onChange={event => setInputText(event.target.value)}
          placeholder="Ex) Hello There! General Kenobi!"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "2rem",
            fontSize: "2rem",
            padding: "1rem"
          }}
          onKeyUp={event => {
            if (event.key === "Enter") {
              onSubmit();
            }
          }}
        />
      </div>
      <div>
        {msgs.map(msg => (
          <div style={{ display: "flex", alignItems: "center" }} key={msg.id}>
            <span style={{ fontSize: "2.5rem", marginRight: "1.5rem" }}>
              {msg.content}
            </span>
            <button
              style={{ cursor: "pointer", fontSize: "2rem" }}
              onClick={() => onDelete(msg.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  async function onDelete(postId) {
    await request.delete(`${URL}/posts?id=${postId}`);
    setMsgs(msgs.filter(msg => msg.id !== postId));
  }

  async function onSubmit() {
    const { data } = await request.post(`${URL}/posts`, { post: inputText });
    setInputText("");
    setMsgs(msgs.concat(data));
  }
}
