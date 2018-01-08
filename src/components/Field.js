import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Label } from "semantic-ui-react";
import { changeSingleKeyAction } from "../actions";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicode: null
    };
    this.createUnicode = this.createUnicode.bind(this);
  }
  createUnicode(e) {
    const input = e.target.value || "";
    const text = String(input);

    if (text.length < 4 || text.length > 6) {
      this.setState({
        unicode: this.props.character
      });
      this.props.changeSingleKeyAction(
        this.props.character,
        this.props.character
      );
      return;
    }

    const char = text.startsWith("U+") ? text.substr(2).trim() : text.trim();
    const codePoint = `0x${char}`;
    if (isNaN(codePoint)) {
      return;
    }
    try {
      const unicode = String.fromCodePoint(codePoint);
      this.setState({
        unicode
      });
      this.props.changeSingleKeyAction(this.props.character, unicode);
    } catch (err) {
      console.log(`Invalid code point. Setting to default`);
      this.setState({ unicode: this.props.character });
      this.props.changeSingleKeyAction(
        this.props.character,
        this.props.character
      );
      return;
    }
  }
  render() {
    const { character, keyboard: { keys } } = this.props;

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
          {/* <Label className="Config--Item--Label">{this.state.unicode}</Label> */}
          <Label className="Config--Item--Label">
            {this.state.unicode ? this.state.unicode : keys[character]}
          </Label>
        </Input>
      </div>
    );
  }
}

const mapStateToProps = ({ keyboard }) => {
  return {
    keyboard
  };
};

export default connect(mapStateToProps, { changeSingleKeyAction })(Field);
