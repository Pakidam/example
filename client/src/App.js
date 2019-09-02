import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Stations from "./Stations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/stations">List of Stations</Link>
        </li>

        <Switch>
          <Route exact path="/stations" component={Stations} />
        </Switch>
      </ul>
    );
  }
}

export default App;
