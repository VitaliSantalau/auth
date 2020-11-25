import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { useAuth } from './ProvideAuth';


function LogInPage(props) {
  const auth = useAuth();
    
  return (
    <div>
      <Link to="/" className="link">Home</Link>
      <Link to="/register">Sing up</Link>
      <form>
        
      </form>
    </div>
    

    
     /* <button onClick={auth.logIn}>LogIn</button>
      <button onClick={auth.logOut}>LogOut</button>*/
   
  );
};

export default LogInPage;