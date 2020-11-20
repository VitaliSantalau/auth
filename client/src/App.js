import React, { Fragment, useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Link to="/login" className="link">LogIn</Link>
      <Link to="/" className="link">LogOut</Link>
      <Link to="/admin" className="link">admin</Link>
      <Switch>
        <Route exact path="/">
          <PublicPage />
        </Route>
        <Route exact path="/admin">
          { checkLoggedIn() ? <AdminPage /> : <Redirect to="/login" /> }
        </Route>
        <Route>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
};

function checkLoggedIn(state) {
  return state;
};

function LoginPage() {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    checkLoggedIn(isloggedIn);
  }, [isloggedIn]
  )
  

  return (
    <button onClick={setIsLoggedIn(true)}>LogIn</button>
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

export default App;