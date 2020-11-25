import React, { Fragment, useState, useEffect, useContext, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect, NavLink} from 'react-router-dom';
import './App.css';

import { ProvideAuth } from "./auth/ProvideAuth";
import ProtectedRoute from "./auth/ProtectedRoute";
import LogInPage from './auth/LogInPage';
import RegisterPage from './auth/RegisterPage';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <PublicPage />
          </Route>
          <Route path="/logIn">
            <LogInPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <ProtectedRoute path="/user" status="user">
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute path="/admin" status="admin">
            <AdminPage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
};

function PublicPage() {
  return (
    <div>
      <NavLink to="/logIn" className="link">Log in</NavLink>
      <NavLink to="/register" className="link">Sing up</NavLink>
      <h1>Public Page</h1>
    </div>
  
  )
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