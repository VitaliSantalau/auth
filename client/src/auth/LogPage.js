import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { useAuth } from './ProvideAuth';


function LogPage(props) {
  const auth = useAuth();
  let { path, url } = useRouteMatch();
    
  return (
    <Router>
      <Link to={`${url}/logIn`}>Log in</Link>
      <Link to={`${url}/singUp`}>Sing up</Link>
      <Switch>
      <Route exact path={`${path}`}>
          <h1>Log in</h1>
        </Route>
        <Route path={`${path}/logIn`}>
          <h1>Log in</h1>
        </Route>
        <Route path={`${path}/singUp`}>
          <h1>Sing up</h1>
        </Route>
      </Switch>
    </Router>




    
     /* <button onClick={auth.logIn}>LogIn</button>
      <button onClick={auth.logOut}>LogOut</button>*/
   
  );
};

export default LogPage;