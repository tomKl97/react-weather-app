import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from "./App";
import HistoryComponent from "./Components/HistoryComponent";

class Routes extends Component {
    render() {
        return (
        <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/history" exact component={HistoryComponent} />

                </Switch>
        </Router>
        );
    }
}

export default Routes;