import React, { Component } from "react";
import { connect } from "react-redux";
import PreLogIn from "./PreLogIn";
import TypeArea from "./TypeArea";

class Home extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div fluid className="Home--container">
        {!auth.signedIn ? <PreLogIn /> : <TypeArea />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Home);
// export default Home;
