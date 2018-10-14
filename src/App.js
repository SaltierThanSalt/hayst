import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./containers/Modal";
import NavTabs from "./containers/NavTabs";
import Header from "./containers/Header";
import McCharLookingRight from "./img/mc_char_looking_right.png";
import Home from "./containers/Home";
import SocialMedia from "./containers/SocialMedia";
import RecentUploads from "./containers/RecentUploads";
import Shop from "./containers/Shop";
import Information from "./containers/info";
import Arts from "./containers/artstab";
import Comics from "./containers/Comics";
import News from "./containers/News";
import { css } from "emotion";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    modalOn: false
  };

  render() {
    const { modalOn } = this.state;
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div
          style={{
            borderTop: "10px solid #474647"
          }}
        >
          <div
            className={css`
              background-image: url(${McCharLookingRight});
              background-color: black;
              height: 12rem;
              background-size: 12rem;
              background-repeat: no-repeat;
              background-position: center center;
            `}
          />
          {modalOn && (
            <Modal onHide={() => this.setState({ modalOn: false })} />
          )}
          <div
            className="btn btn-default"
            onClick={() => this.setState({ modalOn: true })}
          >
            {" "}
            ⬆ Updates
          </div>
          <div />
          <NavTabs />
          <Header />
          <Switch className="Navigation">
            <Route exact path="/" component={Home} />
            <Route path="/socialmedia" component={SocialMedia} />
            <Route path="/uploads" component={RecentUploads} />
            <Route path="/shop" component={Shop} />
            <Route path="/info" component={Information} />
            <Route path="/arts" component={Arts} />
            <Route path="/comics" component={Comics}/>
            <Route path="/news" component={News}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
