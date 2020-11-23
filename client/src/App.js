import React, { Fragment, useState, useEffect, useContext, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import './App.css';

import { ProvideAuth } from "./auth/ProvideAuth";
import ProtectedRoute from "./auth/ProtectedRoute";
import LoginPage from "./auth/LoginPage";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/log" className="link">Log In</Link>
          <Link to="/admin" className="link">Admin</Link>
          <Link to="/user" className="link">User</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <PublicPage />
          </Route>
          <Route exact path="/log">
            <LoginPage />
          </Route>
          <ProtectedRoute path="/admin">
            <AdminPage />
          </ProtectedRoute>
          <ProtectedRoute path="/user">
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