import React, { Component } from "react";
import { TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import Keyboard from "./Keyboard";

class TypeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      englishContent: "",
      unicodeContent: ""
    };
    this.handleEnglishInput = this.handleEnglishInput.bind(this);
  }

  componentDidMount() {
    if (this.state.englishContent.length === 0) {
      this.setState({
        unicodeContent: ""
      });
    }
  }

  handleEnglishInput(e, { value }) {
    const english = value.toLowerCase();
    const englishChars = english.split("");
    const { keys } = this.props.keyboard;
    const availableKeys = Object.keys(keys);
    const unicode = englishChars
      .map(char => {
        if (availableKeys.includes(char)) {
          return keys[char];
        }
        return char;
      })
      .join("");

    this.setState({
      unicodeContent: unicode
    });
  }

  render() {
    return (
      <div className="TypeArea--container">
        <div className="TypeArea--english--container">
          <TextArea
            placeholder="Type here in english"
            autoHeight
            className="TypeArea--english"
            onChange={this.handleEnglishInput}
          />
        </div>
        <div className="TypeArea--unicode--container">
          {this.props.signedIn &&
            this.props.keyboard.showKeyboard && <Keyboard />}
          <TextArea
            placeholder="Your crypted text appears here"
            autoHeight
            className="TypeArea--unicode"
            value={this.state.unicodeContent}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, keyboard }) => {
  const { signedIn } = auth;

  return {
    signedIn,
    keyboard
  };
};

export default connect(mapStateToProps)(TypeArea);
