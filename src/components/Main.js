import React from "react";
import { Container, Segment } from "semantic-ui-react";
import NavBar from "./NavBar";
import Config from "./Config";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Segment attached="bottom">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/config" component={Config} />
        </Switch>
      </Segment>
    </div>
  );
};

export default Main;
