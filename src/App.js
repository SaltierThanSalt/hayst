import React, { useState } from "react";
import "./App.css";
import NavTabs from "./containers/NavTabs";
import McCharLookingRight from "./img/favicon.png";
import Home from "./containers/Home";
import SocialMedia from "./containers/SocialMedia";
import RecentUploads from "./containers/RecentUploads";
import Shop from "./containers/Shop";
import Information from "./containers/info";
import Arts from "./containers/artstab";
import Comics from "./containers/Comics";
import News from "./containers/News";
import Chat from "./containers/Chat";
import { css } from "emotion";
import { Route, Switch } from "react-router-dom";

export default function App() {
  const [chatOpened, setChatOpened] = useState(false);
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      `}
    >
      <div
        style={{
          borderTop: "10px solid #474647",
          height: "100%"
        }}
      >
        <div
          className={css`
            background-image: url(${McCharLookingRight});
            background-color: black;
            height: 16rem;
            background-size: 40rem;
            background-repeat: no-repeat;
            background-position: center center;
          `}
        />
        <div
          className="btn btn-default"
          onClick={() => setChatOpened(!chatOpened)}
        >
          Chat
        </div>
        <div />
        {chatOpened ? (
          <Chat />
        ) : (
          <>
            <NavTabs />
            <Switch className="Navigation">
              <Route exact path="/" component={Home} />
              <Route path="/socialmedia" component={SocialMedia} />
              <Route path="/uploads" component={RecentUploads} />
              <Route path="/shop" component={Shop} />
              <Route path="/info" component={Information} />
              <Route path="/arts" component={Arts} />
              <Route path="/comics" component={Comics} />
              <Route path="/news" component={News} />
            </Switch>
          </>
        )}
      </div>
    </div>
  );
}
