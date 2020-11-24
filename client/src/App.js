import React, { Fragment, useState, useEffect, useContext, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import './App.css';

import { ProvideAuth } from "./auth/ProvideAuth";
import ProtectedRoute from "./auth/ProtectedRoute";
import LogPage from "./auth/LogPage";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/identity/logIn" className="link">Log In</Link>
          <Link to="/identity/singUp" className="link">Sing Up</Link>
          <Link to="/admin" className="link">Admin</Link>
          <Link to="/user" className="link">User</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <PublicPage />
          </Route>
          <Route path="/identity/logIn">
            <LogPage status="logIn"/>
          </Route>
          <Route path="/identity/singUp">
            <LogPage status="singUp"/>
          </Route>
          <ProtectedRoute path="/admin" status="admin">
            <AdminPage />
          </ProtectedRoute>
          <ProtectedRoute path="/user" status="user">
            <UserPage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
};

function PublicPage() {
  return <h1>Public Page</h1>
};

function AdminPage() {
  return (
    <Fragment>
      <PublicPage />
      <button>Edit</button>
    </Fragment>
  )
};

function UserPage() {
  return <h1>Hi user</h1>
};

export default App;