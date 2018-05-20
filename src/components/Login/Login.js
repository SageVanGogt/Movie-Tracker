import React from 'react';
import CreateNewUser from '../../containers/CreateNewUser/CreateNewUser';
import UserLogin from '../../containers/UserLogin/UserLogin';

const Login = (props) => {
  return (
    <div>
      <CreateNewUser />
      <UserLogin />
    </div>
  )
}

export default Login;