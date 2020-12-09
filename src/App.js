import React, { Component } from "react";
import "./stylesheets/App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

class App extends Component {
  render() {
    return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
    )
  }
}

export default App;
