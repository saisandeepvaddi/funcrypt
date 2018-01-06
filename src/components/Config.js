import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Input,
  Label,
  Container
} from "semantic-ui-react";
import { Redirect, withRouter } from "react-router-dom";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicode: props.character
    };
    this.createUnicode = this.createUnicode.bind(this);
  }
  createUnicode(e) {
    const input = e.target.value || "";
    const text = String(input);

    if (text.length !== 4 && text.length !== 6) {
      this.setState({
        unicode: this.props.character
      });
      return;
    }

    const char = text.startsWith("U+") ? text.substr(2).trim() : text.trim();
    const codePoint = `0x${char}`;
    if (isNaN(codePoint)) {
      return;
    }
    const unicode = String.fromCodePoint(codePoint);
    this.setState({
      unicode
    });
  }
  render() {
    const { character } = this.props;
    return (
      <div className="Config--Item">
        <Input
          labelPosition="right"
          type="text"
          placeholder="Unicode"
          onChange={this.createUnicode}
        >
          <Label basic className="Config--Item--Label">
            {character}
          </Label>
          <input className="Config--Item--Input" />
          <Label className="Config--Item--Label">{this.state.unicode}</Label>
        </Input>
      </div>
    );
  }
}

const Numbers = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="Config--Numbers--container">
      {digits.map(digit => <Field key={digit} character={digit} />)}
    </div>
  );
};

const Alphabet = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  return (
    <div className="Config--Alphabet--container">
      {alphabet.map(alpha => <Field key={alpha} character={alpha} />)}
    </div>
  );
};

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
      <Container>
        <Header>Keyboard</Header>
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
          <Button type="submit">Save</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth: { signedIn } }) => {
  return { signedIn };
};

export default withRouter(connect(mapStateToProps)(Config));
// export default Config;
