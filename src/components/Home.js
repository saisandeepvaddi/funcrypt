import React, { Component } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { signInAction } from "../actions";

class Home extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Container fluid>
        <h1>Home</h1>
        {!auth.signedIn && (
          <Button color="google plus" onClick={this.props.signInAction}>
            <Icon name="google plus" /> Google Sign In
          </Button>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { signInAction })(Home);
// export default Home;
