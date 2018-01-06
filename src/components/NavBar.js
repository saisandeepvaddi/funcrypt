import React, { Component, Fragment } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: "funcrypt" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { location: { pathname } } = this.props;

    return (
      <Fragment>
        <Menu secondary inverted attached="top" color="teal">
          <Menu.Item
            name="funcrypt"
            active={activeItem === "funcrypt"}
            onClick={this.handleItemClick}
            link
          >
            <Link to="/">funcrypt</Link>
          </Menu.Item>
          {pathname !== "/config" && (
            <Menu.Item position="right" link>
              <Link to="/config">Change Keyboard</Link>
            </Menu.Item>
          )}

          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
