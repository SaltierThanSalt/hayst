import React, { Component } from "react";
import { css } from "emotion";
import request from "axios";
import URL from "../../../constants/URL";

export default class MsgBoard extends Component {
  state = {
    inputText: "",
    msgs: []
  };

  async componentDidMount() {
    const { data } = await request.get(`${URL}/posts`);
    this.setState({
      msgs: data
    });
  }

  render() {
    const { inputText, msgs } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h1
          className={css`
            margin-top: 1rem;
          `}
        >
          General Chat{" "}
        </h1>
        <input
          value={inputText}
          onChange={event => this.setState({ inputText: event.target.value })}
          placeholder="Ex) Hello There! General Kenobi! - Obiwan Kenobyee"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginTop: "2em"
          }}
          onKeyUp={event => {
            if (event.key === "Enter") {
              this.onSubmit();
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
              <button onClick={() => this.onDelete(msg.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  onDelete = async postId => {
    await request.delete(`${URL}/posts?id=${postId}`);
    this.setState(state => ({
      msgs: state.msgs.filter(msg => msg.id !== postId)
    }));
  };

  onSubmit = async() => {
    const { inputText } = this.state;
    const { data } = await request.post(`${URL}/posts`, { post: inputText });
    this.setState(state => ({
      inputText: "",
      msgs: state.msgs.concat(data)
    }));
  };
}
