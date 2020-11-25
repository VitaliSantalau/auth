import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './ProvideAuth';

function ProtectedRoute({ children, path, status }) {
  const auth = useAuth();
  return (
    <Route
      path
      render={() => (auth.status === status && auth.isAuth) ? children : <Redirect to="/logIn" />}
    />
  )
  };

export default ProtectedRoute;