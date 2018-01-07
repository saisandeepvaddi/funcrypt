import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Header, Container } from "semantic-ui-react";
import { Redirect, withRouter } from "react-router-dom";
import Alphabet from "./Alphabet";
import Numbers from "./Numbers";
import { makeTempKeyboardPermanentAction } from "../actions";

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeTempKeyboardPermanentAction();
    console.log("Submitted");
  }

  onCheckboxChange(e, { checked }) {
    this.setState({
      digits: checked
    });
  }

  render() {
    const { signedIn } = this.props;

    if (!signedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Container className="Config--container">
        <Header>Keyboard</Header>
        <div style={{ paddingBottom: "30px" }}>
          <p>How ?</p>
          <p>
            Get Unicode code points from{" "}
            <a
              href="https://unicode-table.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              unicode-table
            </a>{" "}
            or any website. Put Unicode number in "U+1234" or "1234" format.
          </p>
          <p>
            Enter same character to replace them to their original English
            character. Example: Put 'a' or any invalid number to get 'a' again
          </p>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Checkbox
              label="digits"
              onChange={this.onCheckboxChange}
              checked={this.state.digits}
            />
          </Form.Field>
          <Form.Field>
            <div className="Config--keys">
              {this.state.digits && <Numbers />}
              <Alphabet />
            </div>
          </Form.Field>
          <Button type="submit" color="brown">
            Save
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth: { signedIn } }) => {
  return { signedIn };
};

export default withRouter(
  connect(mapStateToProps, { makeTempKeyboardPermanentAction })(Config)
);
// export default Config;
