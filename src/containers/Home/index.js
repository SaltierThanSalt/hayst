import React, { useState } from "react";
import Greeting from "./Greeting";
import Main from "./Main";

export default function Home() {
  const [currentTab] = useState("home");
  return (
    <div
      style={{
        width: "100%",
        position: "relative"
      }}
    >
      <div style={{ width: "100%", marginTop: "5rem" }}>
        {currentTab === "home" && (
          <div>
            <Greeting />
            <Main />
          </div>
        )}
      </div>
    </div>
  );
}
