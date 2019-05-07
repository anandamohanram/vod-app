import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HistoryPage from "../containers/historyPage/HistoryPage";
import HomePage from "../containers/homePage/HomePage";

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/history" component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
