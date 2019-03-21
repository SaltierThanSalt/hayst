import React, { useState } from "react";
import NavTabs from "./containers/NavTabs";
import McCharLookingRight from "./img/favicon.png";
import Home from "./containers/Home";
import SocialMedia from "./containers/SocialMedia";
import RecentUploads from "./containers/RecentUploads";
import Information from "./containers/info";
import Arts from "./containers/artstab";
import Comics from "./containers/Comics";
import News from "./containers/News";
import Chat from "./containers/Chat";
import Button from "./components/Button";
import { css } from "emotion";
import { Route, Switch } from "react-router-dom";

export default function App() {
  const [chatOpened, setChatOpened] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <div
        className={css`
          border-top: 10px solid rgb(71, 70, 71);
          background-image: url(${McCharLookingRight});
          background-color: black;
          width: 100%;
          height: 16rem;
          background-size: 40rem;
          background-repeat: no-repeat;
          background-position: center center;
        `}
      />
      <Button
        style={{
          marginTop: "1rem",
          marginLeft: "1rem"
        }}
        onClick={() => setChatOpened(!chatOpened)}
      >
        Chat
      </Button>
      <div />
      {chatOpened ? (
        <Chat />
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <NavTabs />
          <Switch className="Navigation">
            <Route exact path="/" component={Home} />
            <Route path="/socialmedia" component={SocialMedia} />
            <Route path="/uploads" component={RecentUploads} />
            <Route path="/info" component={Information} />
            <Route path="/arts" component={Arts} />
            <Route path="/comics" component={Comics} />
            <Route path="/news" component={News} />
          </Switch>
        </div>
      )}
    </div>
  );
}
