import React, { Component } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { signOutAction, toggleKeyboardAction, signInAction } from "../actions";
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
      <div className="not--printable">
        <Menu secondary inverted attached="top" color="teal">
          <Menu.Item name="funcrypt" onClick={this.handleItemClick} link>
            <NavLink to="/" style={{ color: "white" }}>
              <h3>funcrypt</h3>
            </NavLink>
          </Menu.Item>
          {!signedIn &&
            pathname === "/" && (
              <Menu.Item position="right">
                <Button color="google plus" onClick={this.props.signInAction}>
                  <Icon name="google plus" /> Sign in with Google
                </Button>
              </Menu.Item>
            )}
          {signedIn &&
            pathname !== "/config" && (
              <Menu.Item>
                <NavLink
                  to="/config"
                  style={{
                    border: "2px solid teal",
                    borderRadius: "3px",
                    padding: "7px",
                    color: "white"
                  }}
                >
                  Change Keyboard
                </NavLink>
              </Menu.Item>
            )}
          {signedIn &&
            pathname !== "/config" && (
              <Menu.Item>
                <Button
                  basic
                  color="teal"
                  inverted
                  onClick={toggleKeyboardAction}
                >
                  {showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
                </Button>
              </Menu.Item>
            )}
          {signedIn &&
            pathname !== "/config" && (
              <Menu.Item>
                <Button
                  basic
                  color="teal"
                  inverted
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print Content
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
      </div>
    );
  }
}

const mapStateToProps = ({ keyboard, auth }) => {
  return { showKeyboard: keyboard.showKeyboard, auth };
};

const NavBarWithAuth = connect(mapStateToProps, {
  signOutAction,
  toggleKeyboardAction,
  signInAction
})(NavBar);

export default withRouter(NavBarWithAuth);
// export default NavBarWithRouter;
