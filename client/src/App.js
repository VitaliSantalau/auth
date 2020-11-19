import React, { Fragment, useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
/*import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";*/

/*<Router>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
        </Switch>
      </Router>
*/

const AuthContext = createContext();

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(false);

  return user;
};

function PrivateRoute({ children }) {
  const auth = useContext(AuthContext);
  return (
    <Route
      render={() => children}
    />
  );
}

function Protected() {
  const auth = useContext(AuthContext);
  return (
    <h3>Protected</h3>
  )
};

function LoginPage() {
  const auth = useContext(AuthContext);
  return (
    <button >click me</button>
  )
};



function App() {
  return (
    <AuthContext.Provider value={useProvideAuth()}>
      <Router>       
        <Switch>
          <Route exact path="/">
            <h3>Public</h3>
          </Route>
          <Route path="/public">
            <h3>Public</h3>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <Protected />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;