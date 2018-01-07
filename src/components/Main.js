import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import NavBar from "./NavBar";
import Config from "./Config";
import Home from "./Home";
import { connect } from "react-redux";
import { initAuth, initKeyboard } from "../actions";
import { Switch, Route, withRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    this.props.initAuth();
  }
  render() {
    return (
      <div className="Main--container">
        <NavBar />
        {/* <Segment attached="bottom" compact={false}> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/config" component={Config} />
        </Switch>
        {/* </Segment> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(
  connect(mapStateToProps, { initAuth, initKeyboard })(Main)
);
// export default Main;
