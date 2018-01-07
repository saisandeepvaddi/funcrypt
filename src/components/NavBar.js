import React, { Component, Fragment } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { signOutAction, toggleKeyboardAction } from "../actions";
import { connect } from "react-redux";

class NavBar extends Component {
  state = { activeItem: "funcrypt" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const {
      location: { pathname },
      auth: { signedIn },
      showKeyboard,
      toggleKeyboardAction
    } = this.props;

    return (
      <Fragment>
        <Menu secondary inverted attached="top" color="teal">
          <Menu.Item name="funcrypt" onClick={this.handleItemClick} link>
            <Link to="/">funcrypt</Link>
          </Menu.Item>
          {signedIn &&
            pathname !== "/config" && (
              <Menu.Item position="right" link>
                <Link to="/config">Change Keyboard</Link>
              </Menu.Item>
            )}
          {signedIn &&
            pathname !== "/config" && (
              <Menu.Item position="right" link>
                <Button onClick={toggleKeyboardAction}>
                  {showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
                </Button>
              </Menu.Item>
            )}
          {signedIn && (
            <Menu.Menu position="right">
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.props.signOutAction}
              />
            </Menu.Menu>
          )}
        </Menu>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ keyboard, auth }) => {
  return { showKeyboard: keyboard.showKeyboard, auth };
};

const NavBarWithAuth = connect(mapStateToProps, {
  signOutAction,
  toggleKeyboardAction
})(NavBar);

export default withRouter(NavBarWithAuth);
// export default NavBarWithRouter;
