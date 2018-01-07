import React, { Component } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import PreLogIn from "./PreLogIn";
import TypeArea from "./TypeArea";

class Home extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Container fluid className="Home--container">
        {!auth.signedIn ? <PreLogIn /> : <TypeArea />}
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Home);
// export default Home;
