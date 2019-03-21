import React from "react";
import Greeting from "./Greeting";
import Main from "./Main";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Greeting />
      <Main />
    </div>
  );
}
