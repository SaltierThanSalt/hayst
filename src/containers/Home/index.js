import React from "react";
import Greeting from "./Greeting";
import Thanks from "./Thanks";
import Preview from "./Preview";

export default function Home() {
  return (
    <div>
      <Greeting />
      <Thanks />
      <Preview />
    </div>
  );
}
