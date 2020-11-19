import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
