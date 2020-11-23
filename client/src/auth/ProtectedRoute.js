import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './ProvideAuth';

function ProtectedRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route 
      { ...rest }
      render={() => { 
        auth.user === "admin" ? children : <Redirect to="/log" />
        switch(auth.user) {
          case "admin":
            return children;
            break;
          case "user":
            return children
          default:
            return <Redirect to="/log" />
          }
        }
      }
    />
  );
};

export default ProtectedRoute;