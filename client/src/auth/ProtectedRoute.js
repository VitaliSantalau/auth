import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import useAuth from "./ProvideAuth";

function ProtectedRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route 
      { ...rest }
      render={({ location }) => auth.user ?
        children :
        <Redirect to={{
          pathname: "/login",
          state: { from: location }
          }}
        />
      }
    />
  );
};

export default ProtectedRoute;