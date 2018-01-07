import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { signInAction } from "../actions";

const PreLogIn = props => {
  return (
    <div>
      <Button color="google plus" onClick={props.signInAction}>
        <Icon name="google plus" /> Sign in with Google
      </Button>
    </div>
  );
};

export default connect(null, { signInAction })(PreLogIn);
