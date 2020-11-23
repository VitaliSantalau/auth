import React from 'react';
import { useAuth } from './ProvideAuth';


function LoginPage() {
  const auth = useAuth();
  
  return (
    <div>
      <div>Already registered?</div>
      <button >LogIn</button>
      <button >LogOut</button>
    </div>
  );
};

export default LoginPage;