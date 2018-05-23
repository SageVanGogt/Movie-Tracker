import React from 'react';
import CreateNewUser from '../../containers/CreateNewUser/CreateNewUser';
import UserLogin from '../../containers/UserLogin/UserLogin';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <CreateNewUser />
      <UserLogin />
    </div>
  );
};

export default Login;