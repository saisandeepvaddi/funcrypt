import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
