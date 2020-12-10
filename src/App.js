import React, { Component } from "react";
import "./stylesheets/App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Podcasts from "./pages/Podcasts";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/podcast" component={Podcasts} />
        </Switch>
      </>
    );
  }
}

export default App;
