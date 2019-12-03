import React, { Component, Fragment } from "react";
import CustomNav from "./components/CustomNav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <CustomNav />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <AboutMe />} />
            <Route exact path="/projects" render={() => <Projects />} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
