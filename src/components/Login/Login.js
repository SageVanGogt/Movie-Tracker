import React from 'react';
import CreateNewUser from '../CreateNewUser/CreateNewUser';
import UserLogin from '../UserLogin/UserLogin';

const Login = (props) => {
  return (
    <div>
      <CreateNewUser />
      <UserLogin />
    </div>
  )

}

export default Login;