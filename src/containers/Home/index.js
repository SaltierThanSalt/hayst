import React from "react";
import Greeting from "./Greeting";
import Thanks from "./Thanks";
import Main from "./Main";

export default function Home() {
  return (
    <div>
      <Greeting />
      <Thanks />
      <Main />
    </div>
  );
}
