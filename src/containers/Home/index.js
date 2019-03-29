import React, { useState } from "react";
import Greeting from "./Greeting";
import Main from "./Main";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          background: "#fff",
          top: "10rem",
          width: "20rem",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentTab("home")}
        >
          Home
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentTab("family")}
        >
          My Friends and Family
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentTab("draw")}
        >
          Why I draw
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentTab("youtube")}
        >
          How I started YouTube
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentTab("school")}
        >
          School related
        </div>
      </div>
      <div style={{ width: "80%", marginLeft: "20%" }}>
        {currentTab === "home" && (
          <div>
            <Greeting />
            <Main />
          </div>
        )}
        {currentTab === "family" && (
          <div>So my mom and dad, and my best friends are...</div>
        )}
        {currentTab === "draw" && <div>So I started drawing when I was...</div>}
        {currentTab === "youtube" && (
          <div>So I started youtube when I was...</div>
        )}
        {currentTab === "school" && (
          <div>
            I got really good grades or bad grades bla I hate this subject but I
            love that subject, I like SIS but I hate it...
          </div>
        )}
      </div>
    </div>
  );
}
