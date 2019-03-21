import React from "react";
import PropTypes from "prop-types";
import Home from "./Home";
import PageOne from "./PageOne";
import Button from "../../components/Button";
import { Route, Switch } from "react-router-dom";

RecentUploads.propTypes = {
  history: PropTypes.object.isRequired
};

export default function RecentUploads({ history }) {
  return (
    <div style={{ width: "40%" }}>
      <Switch>
        <Route exact path="/uploads/" component={Home} />
        <Route path="/uploads/1" component={PageOne} />
      </Switch>
      <div
        style={{ display: "flex", marginTop: "1rem", justifyContent: "center" }}
      >
        <Button onClick={() => history.push("/uploads")}>To Page One</Button>
        <Button
          style={{ marginLeft: "1rem" }}
          onClick={() => history.push("/uploads/1")}
        >
          To Page Two
        </Button>
      </div>
      <div style={{ paddingBottom: "2rem" }}>
        <div
          style={{
            borderTop: "90px solid #ffffff",
            display: "flex",
            justifyContent: "center"
          }}
        >
          Copyright Hayst 2018
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
