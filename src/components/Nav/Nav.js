import { connect } from 'react-redux';
import React from 'react';
import { logOutUser} from '../../actions';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      <NavLink to="/login">Login/Sign up</NavLink>
      <button
        onClick={props.handleLogout}
      >Sign Out</button>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logOutUser())
})

export default connect(null, mapDispatchToProps)(Nav);
