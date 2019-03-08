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
    <div style={{ textAlign: "center" }}>
      <h1
        className={css`
          margin-top: 1rem;
        `}
      >
        Message Board
      </h1>
      <input
        value={inputText}
        onChange={event => setInputText(event.target.value)}
        placeholder="Ex) Hello There! General Kenobi! - Obiwan Kenobyee"
        style={{
          width: "50%",
          marginLeft: "25%",
          marginTop: "2em"
        }}
        onKeyUp={event => {
          if (event.key === "Enter") {
            onSubmit();
          }
        }}
        className="form-control"
      />
      <div
        className={css`
          padding: 1rem;
          font-size: 2.5rem;
        `}
      >
        {msgs.map(msg => (
          <div key={msg.id}>
            {msg.content}{" "}
            <button onClick={() => onDelete(msg.id)}>delete</button>
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
