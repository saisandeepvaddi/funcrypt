import React from "react";
import { connect } from "react-redux";
import { signInAction } from "../actions";
import "../Home.css";
import Carousel from "./Carousel";

const PreLogIn = props => {
  return (
    <div className="PreLogin--container">
      <div className="PreLogin--hero">
        <h3>Create your own cryptic keyboards from Unicode characters</h3>
        <Carousel />
        {/* <Button color="google plus" onClick={props.signInAction}>
          <Icon name="google plus" /> Sign in with Google
        </Button> */}
      </div>

      <div className="PreLogin--footer">
        Made with &nbsp;
        <span role="img" aria-label="green heart">
          💛
        </span>{" "}
        &nbsp; by &nbsp;&nbsp;
        <span>
          <a
            href="https://github.com/saisandeepvaddi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @saisandeepvaddi
          </a>
        </span>
      </div>
    </div>
  );
};

export default connect(null, { signInAction })(PreLogIn);
