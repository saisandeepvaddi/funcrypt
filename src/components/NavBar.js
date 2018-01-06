import React, { Component, Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { signOutAction } from "../actions";
import { connect } from "react-redux";

class NavBar extends Component {
  state = { activeItem: "funcrypt" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { location: { pathname }, auth: { signedIn } } = this.props;

    return (
      <Fragment>
        <Menu secondary inverted attached="top" color="teal">
          <Menu.Item
            name="funcrypt"
            // active={activeItem === "funcrypt"}
            onClick={this.handleItemClick}
            link
          >
            <Link to="/">funcrypt</Link>
          </Menu.Item>

          {signedIn &&
            pathname !== "/config" && (
              <Menu.Item position="right" link>
                <Link to="/config">Change Keyboard</Link>
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const NavBarWithAuth = connect(mapStateToProps, { signOutAction })(NavBar);

export default withRouter(NavBarWithAuth);
// export default NavBarWithRouter;
