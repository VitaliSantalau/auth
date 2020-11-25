import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { useAuth } from './ProvideAuth';


function RegisterPage(props) {
  const auth = useAuth();
  let { path, url } = useRouteMatch();
    
  return (
    <div>
      <Link to="/" className="link">Home</Link>
      <div>
        <Link to="/logIn">Log in</Link>
        <h1>REGISTER</h1>
      </div>
    </div>
    

    
     /* <button onClick={auth.logIn}>LogIn</button>
      <button onClick={auth.logOut}>LogOut</button>*/
   
  );
};

export default RegisterPage;